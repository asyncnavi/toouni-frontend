import React, {FC, forwardRef} from 'react'
import {Children} from "path-scurry";
import {clsx} from "clsx";
import {variants} from "classname-variants";


type TextFieldProps = {
    label?: string
    htmlFor?: string
    error?: string
    [x: string]: any;
}

export const TextField: FC<TextFieldProps> = forwardRef<HTMLInputElement, TextFieldProps>(
    ({ label, htmlFor, error, ...others }, ref) => {
        return (
            <div className="flex flex-col my-2">
                {label && <label htmlFor={htmlFor} className="mb-2">{label}</label>}
                <input
                    type="text"
                    ref={ref}
                    className={`p-2 outline-0 rounded border-2 ${
                        error ? 'border-red-600 placeholder:text-red-600' : 'border-black'
                    }`}
                    {...others}
                />
                {error && <span className="text-red-600">{error}</span>}
            </div>
        );
    }
);
TextField.displayName = 'TextField';

type ButtonColor = {
    text?: 'light' | 'dark'
    bg?: string
}

type ButtonProps = {
    label?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    fullWidth?: boolean
    variant?: 'text' | 'filled' | 'outlined',
} & React.ButtonHTMLAttributes<HTMLButtonElement>;




const ButtonClass = variants({
    base: "flex justify-center align-center px-4 py-2 rounded outline-0",
    variants: {
        variant : {
            text : 'text-black underline',
            filled : 'border border-black  bg-black text-white',
            outlined : 'border border-black text-black underline',
        },
    },
    defaultVariants : {
        variant : "text"
    }
});
export const Button: FC<ButtonProps> = ({
                                            label,
                                            leftIcon,
                                            rightIcon,
                                            variant = "filled",
                                            fullWidth = false,
                                            ...rest
                                        }) => {


    return (
        <button
            className={clsx(ButtonClass({ variant: variant }),  fullWidth && 'w-full', )}
            {...rest}
        >
            {leftIcon && <span className="mr-2">{leftIcon}</span>}
            {label}
            {rightIcon && <span className="ml-2">{rightIcon}</span>}
        </button>
    );
};

type InputGroupProps = {
    children  :  React.ReactNode
}
export const InputGroup  : FC<InputGroupProps> = ({ children }) => {
    return (
        <div className="flex flex-col my-2">
            { children }
        </div>
    )
}