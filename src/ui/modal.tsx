import React, { FC, useRef } from 'react';

import { IconX } from '@tabler/icons-react';
import { clsx } from 'clsx';

import useOutsideClick from '@/hooks/detect-click-outside';

type ModalProps = {
    title?: string;
    opened?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const Modal: FC<ModalProps> = ({
    opened = false,
    onClose,
    children,
    className,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    const handleClickOutside = () => {
        if (onClose) {
            onClose();
        }
    };

    useOutsideClick(ref, handleClickOutside);

    return (
        <>
            {opened ? (
                <div
                    style={{ backgroundColor: 'rgba(255,255,255,0.50)' }}
                    className=" z-[9999] fixed left-0 right-0 bottom-0 top-0 w-full min-h-[100vh]"
                >
                    <div
                        ref={ref}
                        className={clsx(
                            'mx-auto m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black p-4 rounded ',
                            className && className,
                        )}
                    >
                        <div
                            className="inline-block rounded text-white bg-black p-1 cursor-pointer float-end"
                            onClick={onClose}
                        >
                            <IconX />
                        </div>
                        {children}
                    </div>
                </div>
            ) : null}
        </>
    );
};
