import React, { FC, forwardRef } from 'react';

type TextFieldProps = {
    label?: string;
    htmlFor?: string;
    error?: string;
    fullWidth?: boolean;
    [x: string]: any;
};

export const TextField: FC<TextFieldProps> = forwardRef<
    HTMLInputElement,
    TextFieldProps
>(({ label, htmlFor, error, fullWidth = false, ...others }, ref) => {
    return (
        <div className="flex flex-col my-2 space-y-2">
            {label && (
                <label htmlFor={htmlFor} className="text-xl font-bold">
                    {label}
                </label>
            )}
            <input
                ref={ref}
                className={`p-3 w-full outline-0 rounded border-2 ${
                    error
                        ? 'border-red-600 placeholder:text-red-600'
                        : 'border-black'
                } ${fullWidth && 'w-full'}`}
                {...others}
            />
            {error && <span className="text-red-600">{error}</span>}
        </div>
    );
});

TextField.displayName = 'TextField';

export const TextArea: FC<TextFieldProps> = forwardRef<
    HTMLTextAreaElement,
    TextFieldProps
>(({ label, htmlFor, error, ...others }, ref) => {
    return (
        <div className="flex flex-col my-2">
            {label && (
                <label htmlFor={htmlFor} className="mb-2">
                    {label}
                </label>
            )}
            <textarea
                ref={ref}
                className={`p-2 outline-0 rounded border-2 ${
                    error
                        ? 'border-red-600 placeholder:text-red-600'
                        : 'border-black'
                }`}
                {...others}
            />
            {error && <span className="text-red-600">{error}</span>}
        </div>
    );
});
TextArea.displayName = 'TextArea';

type InputGroupProps = {
    children: React.ReactNode;
};
export const InputGroup: FC<InputGroupProps> = ({ children }) => {
    return <div className="flex flex-col my-2">{children}</div>;
};
