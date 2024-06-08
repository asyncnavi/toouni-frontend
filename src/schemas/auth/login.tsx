import Nope from 'nope-validator';

export const loginSchema = Nope.object().shape({
    email: Nope.string().email('Invalid Email').required('Email is required'),
    password: Nope.string()
        .min(6, 'Password must be greater than or equal to 6 letter')
        .max(127, 'Password must be  less than or equal to 127 letter'),
});

export type LoginInput = {
    email: string;
    password: string;
};
