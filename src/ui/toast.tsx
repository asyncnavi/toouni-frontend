import { FC, useEffect, useState } from 'react';

import { IconX } from '@tabler/icons-react';
import { variants } from 'classname-variants';

export type ToastProps = {
    title: string;
    description?: string;
    duration?: number;
    variant?: 'default' | 'success' | 'danger';
};

const ToastStyles = variants({
    base: 'absolute  border-black border p-2 rounded shadow-[4px_4px_black] bottom-20 right-10',
    variants: {
        variant: {
            default: 'bg-gray-300',
            success: 'bg-green-300',
            danger: 'bg-red-300',
        },
    },
    defaultVariants: {
        variant: 'default',
    },
});

const Toast: FC<ToastProps> = ({ title, description, duration, variant }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (duration !== undefined) {
            const timer = setTimeout(() => {
                setVisible(false);
            }, duration);

            return () => clearTimeout(timer); // Cleanup the timer on component unmount or when duration changes
        }
    }, [duration]);

    if (!visible) return null;
    return (
        <div className={ToastStyles({ variant: variant })}>
            <div
                className="float-right cursor-pointer bg-white rounded-full"
                onClick={() => setVisible(false)}
            >
                <IconX className="w-4 h-4" />
            </div>
            <h2 className="font-semibold">{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Toast;
