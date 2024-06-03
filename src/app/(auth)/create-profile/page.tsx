"use client"

import { Button, TextField } from "@/components/inputs"
import { IconX } from "@tabler/icons-react"

const CreateProfilePage = () => {
    return (
        <div>
            <div className="w-full border-b py-4 sticky top-0 bg-white">
                <div className="flex justify-between w-full max-w-[600px] mx-auto items-center px-2">
                <h1 className="uppercase font-bold">Create profile</h1>
                <div
                        className="bg-green-400 rounded-full w-[30px] h-[30px] flex justify-center items-center shadow-[2px_2px_#000;]">
                        <IconX size={24}/>
                    </div>
                </div>
            </div>    
          <div className="flex flex-col gap-1 mx-auto justify-center max-w-[600px] my-4 px-2">
            <div className="flex gap-2">
                <div className="border-2 p-2 rounded-lg w-max cursor-pointer">
                    Student
                </div>
                <div className="border-black border-2 p-2 rounded-lg w-max cursor-pointer">
                    Organization/Club
                </div>
            </div>
          
            <TextField label="Name" placeholder="john" type="text"  />
            <TextField label="Username" placeholder="john@sandhu" type="text"  />
            <TextField label="Bio " placeholder="john@sandhu" type="text"  />
            <TextField label="When were you born?" placeholder="john@sandhu" type="text"  />
            <TextField label="University/College" placeholder="Chandigarh University" type="text"  />
            <TextField label="Location" placeholder="Mohali" type="text"  />
            <Button label="Continue" />
            </div>           
        </div>
    )
}


export default CreateProfilePage