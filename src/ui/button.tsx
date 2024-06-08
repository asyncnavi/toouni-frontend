import React, { FC } from 'react';

import { variants } from 'classname-variants';
import { clsx } from 'clsx';

type ButtonProps = {
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean;
    variant?: 'text' | 'filled' | 'outlined';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const ButtonClass = variants({
    base: 'flex justify-center align-center px-4 py-2 rounded outline-0',
    variants: {
        variant: {
            text: 'text-black underline',
            filled: 'border border-black  bg-black text-white',
            outlined: 'border border-black text-black underline',
        },
    },
    defaultVariants: {
        variant: 'text',
    },
});
export const Button: FC<ButtonProps> = ({
    label,
    leftIcon,
    rightIcon,
    variant = 'filled',
    fullWidth = false,
    ...rest
}) => {
    return (
        <button
            className={clsx(
                ButtonClass({ variant: variant }),
                fullWidth && 'w-full',
            )}
            {...rest}
        >
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {label}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    );
};
