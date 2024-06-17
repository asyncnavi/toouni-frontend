import * as Nope from 'nope-validator';

export const loginSchema = Nope.object().shape({
    email: Nope.string().email('Invalid Email').required('Email is required'),
    password: Nope.string()
        .required('Password is required')
        .min(6, 'Password must be greater than or equal to 6 letter')
        .max(127, 'Password must be  less than or equal to 127 letter'),
});

export const registerSchema = loginSchema;
export const forgotPasswordSchema = Nope.object().shape({
    email: Nope.string().email('Invalid Email').required('Email is required'),
});

export type LoginInput = {
    email: string;
    password: string;
};
export type RegisterInput = LoginInput;
export type ForgotPasswordInput = Omit<LoginInput, 'password'>;
