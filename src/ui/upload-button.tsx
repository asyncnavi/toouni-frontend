import { FC, useRef } from 'react';

import { IconFileUpload } from '@tabler/icons-react';

export type UploadButtonProps = {
    label?: string;
    onChange: (file: File) => void;
    helperText?: string;
};

const UploadButton: FC<UploadButtonProps> = ({
    onChange,
    label = 'Upload File',
    helperText,
}) => {
    const inputRef = useRef(null);

    const handleClick = () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        inputRef.current.click();
    };

    const handleChange = (ev) => {
        onChange(ev.target.files[0]);
    };

    return (
        <span>
            <button
                onClick={handleClick}
                className="bg-teal-400 font-bold py-2 px-4 flex gap-2 shadow-[8px_8px_black]"
            >
                <IconFileUpload />
                <span className="flex flex-col items-start ">
                    {label}
                    <span className="font-thin ">{helperText}</span>
                </span>
            </button>
            <input
                onChange={handleChange}
                className="hidden"
                type="file"
                ref={inputRef}
            />
        </span>
    );
};

export default UploadButton;
