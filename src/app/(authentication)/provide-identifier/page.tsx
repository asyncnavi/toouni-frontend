'use client';

import React from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import { IconArrowRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import * as Nope from 'nope-validator';
import { useForm } from 'react-hook-form';

import { useVerifyUserExistsMutation } from '@/api/user';
import { Modal, TextField } from '@/ui';
import LoadingBar from '@/ui/loading-bar';
import Toast from '@/ui/toast';

type FormInput = {
    identifier: string;
};

const formSchema = Nope.object().shape({
    identifier: Nope.string().required('Please provide Email or Username'), // corrected 'email' to 'identifier'
});

const Page = () => {
    const router = useRouter();
    const { register, handleSubmit, formState } = useForm<FormInput>({
        resolver: nopeResolver(formSchema),
    });
    const [createAccount, setCreateAccount] = React.useState(false);
    const [checkUserExists, { isLoading, isError, error }] =
        useVerifyUserExistsMutation();

    const handleCheckUser = async (values: FormInput) => {
        try {
            const response = await checkUserExists({
                identifier: values.identifier,
            }).unwrap();

            const data = response.data;
            if (data.user_exists) {
                router.push(`provide-password?identifier=${data.identifier}`);
            } else {
                setCreateAccount(true);
            }
        } catch (err) {}
    };

    return (
        <>
            <LoadingBar loading={isLoading} />
            <Modal
                className="bg-white w-[90%] max-w-[400px] space-y-2"
                title="User not exist"
                opened={createAccount}
                trigger={() => setCreateAccount(!createAccount)}
            >
                <h2>
                    {' '}
                    You don{"'"}t have an account with this email or username.
                </h2>
                <button
                    className="w-full border-2 rounded-md bg-black text-white justify-center border-black text-sm p-1 flex items-center gap-2 shadow-[8px_8px_white] hover:shadow-none"
                    type="submit"
                    disabled={isLoading}
                >
                    Create a new one
                    <IconArrowRight size="18" />
                </button>
                <button
                    className="w-full border-2 rounded-md  justify-center border-black text-sm p-1 flex items-center gap-2  hover:shadow-none"
                    type="submit"
                    disabled={isLoading}
                >
                    Later
                </button>
            </Modal>
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
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading...' : 'Continue'}
                    <IconArrowRight />
                </button>
            </form>
        </>
    );
};

export default Page;
