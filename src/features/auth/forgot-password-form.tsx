import React from 'react';

import { nopeResolver } from '@hookform/resolvers/nope';
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { ForgotPasswordInput, forgotPasswordSchema } from '@/schemas/auth';
import { useAppDispatch } from '@/store';
import { forgotPassword } from '@/store/auth/thunks';
import { Button } from '@/ui/button';
import { InputGroup, TextField } from '@/ui/input';

const ForgotPasswordForm = () => {
    const dispatch = useAppDispatch();
    const { register, handleSubmit, formState } = useForm<ForgotPasswordInput>({
        resolver: nopeResolver(forgotPasswordSchema),
    });

    const sendForgotPasswordEmail = (values: ForgotPasswordInput) => {
        dispatch(forgotPassword(values));
    };

    return (
        <form onSubmit={handleSubmit(sendForgotPasswordEmail)}>
            <h2 className="text-2xl mt-2 mb-4">Forgot password?</h2>
            <TextField
                label="Email"
                placeholder="username123@hotmail.com"
                type="text"
                {...register('email')}
                error={formState.errors.email && formState.errors.email.message}
            />

            <InputGroup>
                <Button type="submit" fullWidth label="Continue" />
            </InputGroup>
            <InputGroup>
                <Link href="/login">
                    <span>
                        Get back to <span className="underline">Login</span>
                    </span>
                </Link>
            </InputGroup>
        </form>
    );
};

export default ForgotPasswordForm;
