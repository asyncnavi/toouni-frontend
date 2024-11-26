'use client';

import React, { FC } from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import { IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import * as Nope from 'nope-validator';
import { useForm } from 'react-hook-form';

import withoutAuth from '@/hoc/without-auth';
import { identifyUser } from '@/services/user';
import { Modal, TextField } from '@/ui';

type FormInput = {
    identifier: string;
};

const formSchema = Nope.object().shape({
    identifier: Nope.string().required('Please provide Email or Username'),
});

const Page = () => {
    const router = useRouter();
    const { register, handleSubmit, formState } = useForm<FormInput>({
        resolver: nopeResolver(formSchema),
    });
    const [showModal, setShowModal] = React.useState(false);

    const triggerModal = () => setShowModal(!showModal);
    const handleCheckUser = async (values: FormInput) => {
        await identifyUser({
            identifier: values.identifier,
        })
            .then((result) => {
                const userExists = result.data?.user_exists;
                const identifier = result.data?.identifier;

                if (userExists) {
                    router.push(`login-user?identifier=${identifier}`);
                } else {
                    triggerModal();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <AskCreateAccountModal opened={showModal} trigger={triggerModal} />

            <form onSubmit={handleSubmit(handleCheckUser)}>
                <TextField
                    label="Email / Username"
                    placeholder="Enter your email or username."
                    {...register('identifier')}
                    error={formState.errors.identifier?.message}
                />
                <button
                    className="w-full border-2 rounded-md bg-amber-500 justify-center border-black text-2xl p-2 flex items-center gap-2 shadow-[8px_8px_black] hover:shadow-none"
                    type="submit"
                >
                    Continue
                    <IconArrowRight />
                </button>
            </form>
        </>
    );
};

export default withoutAuth(Page);

type Props = {
    opened: boolean;
    trigger: () => void;
};

const AskCreateAccountModal: FC<Props> = ({ opened, trigger }) => {
    const router = useRouter();

    return (
        <Modal
            className="bg-white w-[90%] max-w-[400px] space-y-2"
            title="User not exist"
            opened={opened}
            trigger={trigger}
        >
            <h2> You don{"'"}t have an account with this email or username.</h2>
            <button
                className="w-full border-2 rounded-md bg-black text-white justify-center border-black text-sm p-1 flex items-center gap-2 shadow-[8px_8px_white] hover:shadow-none"
                onClick={() => router.push('/create-username')}
            >
                Create a New Account
                <IconArrowRight size="18" />
            </button>
            <button
                className="w-full border-2 rounded-md  justify-center border-black text-sm p-1 flex items-center gap-2  hover:shadow-none"
                type="submit"
                onClick={trigger}
            >
                Not Now
            </button>
        </Modal>
    );
};
