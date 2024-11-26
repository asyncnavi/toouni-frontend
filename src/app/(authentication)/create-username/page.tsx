'use client';

import React, { useEffect } from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import { IconArrowRight, IconCheck } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import * as Nope from 'nope-validator';
import { useForm } from 'react-hook-form';

import withoutAuth from '@/hoc/without-auth';
import useDebounce from '@/hooks/use-debounce';
import { TextField } from '@/ui';

type FormInput = {
    username: string;
};

const formSchema = Nope.object().shape({
    username: Nope.string()
        .required('Please provide a username')
        .min(4, 'Username must be at least 4 characters long')
        .max(15, 'Username must not exceed 15 characters')
        .regex(
            /^[a-zA-Z0-9_]+$/,
            'Username can only contain letters, numbers, and underscores',
        ),
});

const Page = () => {
    const router = useRouter();
    const { register, handleSubmit, formState, watch } = useForm<FormInput>({
        resolver: nopeResolver(formSchema),
    });
    const [userExists, setUserExists] = React.useState<boolean | null>(null);

    const watchedUsername = watch('username');
    const debouncedUsername = useDebounce(watchedUsername, 500);

    useEffect(() => {
        const checkUsername = async () => {
            if (!debouncedUsername) {
                setUserExists(null);
                return;
            }

            try {
                setUserExists(null);

                // setUserExists(response.data.user_exists);
                // console.log(response.data.user_exists);
            } catch (err) {
                setUserExists(null);
            }
        };
        checkUsername();
    }, [watchedUsername, debouncedUsername]);

    const handleFormSubmission = (values: FormInput) => {
        if (!userExists) {
            router.push(`create-user?username=${values.username}`);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(handleFormSubmission)}>
                <TextField
                    label="Username"
                    placeholder="Enter a username."
                    {...register('username')}
                    error={
                        formState.errors.username?.message ||
                        (userExists ? 'Username already taken.' : '')
                    }
                    helperText={
                        !formState.errors.username?.message &&
                        userExists == false ? (
                            <div className="flex">
                                <IconCheck />
                                <span>You can take this username</span>
                            </div>
                        ) : (
                            ''
                        )
                    }
                    setValidated={userExists === false}
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
