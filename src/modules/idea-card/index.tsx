import React, {FC} from 'react'
import Image from "next/image";
import {IconBubble, IconHeart, IconShare} from "@tabler/icons-react";


type IdeaCardProps = {
    profile_pic  : string
    username : string
    idea : string
}


const IdeaCard:FC<IdeaCardProps> = ({ profile_pic, username, idea }) =>{
    return (

    <div

        className="bg-white mx-auto max-w-[600px] w-full flex flex-col px-2 py-4 justify-between border border-black gap-2 my-4 shadow-[8px_8px_white]">
        <div className="flex gap-1">
            <Image alt="" className="rounded-full " src={profile_pic} width="30"
                   height="30"/>
            <div className="flex flex-col ">
                <h4 className="font-semibold text-sm">{username}</h4>
                <h5 className="text-xs">Chandigarh University | 2 hour ago</h5>
            </div>
        </div>
        <p>

            {idea}
        </p>


        <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
                <button
                    className="shadow-[4px_4px_#000] border border-black px-2 py-0.5 w-max flex items-center gap-2">
                    <IconHeart size="18"/>
                    Like
                </button>
                <button
                    className="shadow-[4px_4px_#000] border border-black px-2 py-.5 w-max flex items-center gap-2">
                    <IconBubble size="18"/>
                    Comment
                </button>
            </div>

            <IconShare/>
        </div>
        <div>
            <small className="text-xs text-gray-400"> 231 likes and 33 comments</small>
        </div>

    </div>
)
}


export default IdeaCard