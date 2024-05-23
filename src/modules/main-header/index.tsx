import {IconBell, IconMessageCircle2} from "@tabler/icons-react";
import React from "react";
import Link from "next/link";


const MainHeader = () => {
    return (
        <header
            className="bg-amber-400  py-4 px-2 sticky top-0 z-10  border-black border-b ">
            <div className=" flex items-center justify-between md:max-w-[1280px] mx-auto">

                <Link href="/" className="text-2xl font-bold shadow-[4px_4px_#fff] rounded-2xl">UNI<span className="">ARC</span></Link>
                <div className="flex gap-2">
                    <div
                        className="bg-green-400 rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-[2px_2px_#000;]">
                        <IconBell size={24}/>
                    </div>
                    <div
                        className="bg-red-400 rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-[2px_2px_#000;]">
                        <IconMessageCircle2 size={32}/>
                    </div>

                </div>

            </div>

        </header>
    )
}


export default MainHeader