'use client'

import React, { useEffect } from "react";
import MockIdeas from "@/mock_data/ideas";
import IdeaCard from "@/modules/idea-card";
import Image from "next/image";
import {IconBulb, IconPlus, IconTicket} from "@tabler/icons-react";
import withAuth from "@/hoc/with-auth";
import { createClient } from "@/utils/supabase/client";

const Page =() => {

    const supabse = createClient()



    return (
        <div className=" ">
            <div className="flex flex-col gap-1 mx-auto justify-center max-w-[600px] my-4 ">
                <div className="flex gap-1 mx-auto justify-center w-full">
                    <Image alt="" className="rounded-full " src="https://randomuser.me/api/portraits/men/3.jpg"
                           width="50"
                           height="50"/>
                    <div className="flex flex-col p-2 bg-gray-200 text-xl rounded-xl w-full">
                        <h5 className="text-xl text-gray-400">What are you sharing ?</h5>
                    </div>
                </div>
                <div className="flex gap-2 justify-end mt-2">
                    <div
                        className="flex gap-1 items-center border border-black w-max p-1  shadow-[4px_4px_#5eead4] rounded-2xl">
                        <div className="flex items-center">
                            <IconBulb size={18}/>
                            Idea
                        </div>

                        <IconPlus size={18}/>
                    </div>
                    <div
                        className="flex gap-1 items-center border border-black w-max p-1  shadow-[4px_4px_#fda4af] rounded-2xl">
                        <div className="flex items-center">
                            <IconTicket size={18}/>
                            Post
                        </div>

                        <IconPlus size={18}/>
                    </div>
                    <div
                        className="flex gap-1 items-center border border-black w-max p-1  shadow-[4px_4px_#c4b5fd] rounded-2xl">
                        <div className="flex items-center">
                            <IconBulb size={18}/>
                            Event
                        </div>

                        <IconPlus size={18}/>
                    </div>

                </div>


            </div>

            {
                MockIdeas.map((v) => {
                    return (
                        <IdeaCard key={v.id} username={v.username} profile_pic={v.profile_pic} idea={v.joke}/>
                    )
                })
            }
        </div>
    )
}

export default withAuth(Page)