import React, { FC } from 'react';

type LoadingBarProps = {
    loading: boolean;
};

const LoadingBar: FC<LoadingBarProps> = ({ loading = false }) => {
    return (
        <>
            {loading && (
                <div className="w-full h-1 overflow-hidden relative">
                    <div className="absolute top-0 inset-0 bg-blue-500 animate-loading-bar"></div>
                </div>
            )}
        </>
    );
};

export default LoadingBar;
