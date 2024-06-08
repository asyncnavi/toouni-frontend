import React, { useEffect } from 'react';

const useOutsideClick = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void,
) => {
    const handleClickOutside = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
        }
    };

    useEffect(() => {
        const handleDocumentClick = (event: MouseEvent) => {
            handleClickOutside(event);
        };

        document.addEventListener('mousedown', handleDocumentClick);

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick);
        };
    }, [ref, callback]);
};

export default useOutsideClick;
