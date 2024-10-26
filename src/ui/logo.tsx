import React, { FC } from 'react';

import Image from 'next/image';

type LogoSize = { w: number; h: number };

type LogoProps = {
    size?: LogoSize;
    color?: 'white' | 'black' | 'yellow';
};

const Logo: FC<LogoProps> = ({ size = { w: 150, h: 150 } }) => {
    return (
        <Image
            src="/assets/logo.png"
            alt="too-uni-logo"
            width={size.w}
            height={size.h}
        />
    );
};

export default Logo;
