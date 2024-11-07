import React from 'react';

import Link from 'next/link';

const Logo = () => {
    return (
        <Link href="/">
            <h1 className="text-4xl w-max font-bold bg-white rounded-xl border">
                toouni<span className="text-amber-500">;</span>
            </h1>
        </Link>
    );
};

export default Logo;
