import React, { FC, useRef } from 'react';

import { IconX } from '@tabler/icons-react';
import { clsx } from 'clsx';

import useOutsideClick from '@/hooks/detect-click-outside';

type ModalProps = {
    title?: string;
    opened?: boolean;
    trigger?: () => void;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Modal: FC<ModalProps> = ({
    opened = false,
    trigger,
    children,
    className,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = () => {
        if (trigger) {
            trigger();
        }
    };

    useOutsideClick(ref, handleClickOutside);

    return (
        <>
            {opened ? (
                <div
                    style={{ backgroundColor: `rgba(0,0,0,0.9)` }}
                    className=" z-[9999] fixed left-0 right-0 bottom-0 top-0 w-full min-h-[100vh]"
                >
                    <div
                        ref={ref}
                        className={clsx(
                            'w-full mx-auto m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black p-4 rounded bg-white',
                            className && className,
                        )}
                    >
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
};
