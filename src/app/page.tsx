
'use client'
import React, {useState} from 'react'
import Link from "next/link";
import Modal from "@/components/modal";
import {Button} from "@/components/inputs";
import LoginForm from "@/modules/login-form";
import withoutAuth from '@/hoc/without-auth';



const Home = () => {

    const [authModal, setAuthModal] = useState(false)

    const closeAuthModal = () => setAuthModal(false)
    const openAuthModal = () => setAuthModal(true)


    return (

            <div className="pattern-design w-full border-black border-b px-4 bg-amber-400 py-2 min-h-[100vh]">
                <Modal title="Login Modal" opened={authModal} onClose={closeAuthModal} className="bg-white w-[95%] max-w-[400px]">
                    <LoginForm />
                </Modal>
                <h2 className="text-2xl">Welcome to UNIARC♥️.</h2>
                <h1 className="uppercase max-w-[800px] font-bold  xs:text-4xl xs:leading-relaxed  md:text-6xl md:leading-relaxed ">
                    Where students{" "}<span className="bg-blue-400 rounded">unite</span>,
                    {" "}<span className="bg-green-400 rounded">share</span>,
                    {" "}<span className="bg-red-400 rounded">thrive</span> together in a vibrant online community.
                </h1>
                <div className="flex gap-2 mt-4">
                    <Button onClick={openAuthModal} label="Login" variant="outlined" />
                    <Button label="Get started" variant="filled" />
                </div>
                <div className="bg-black text-white fixed bottom-0 left-0 right-0 p-2">
                    <div className="flex gap-3 flex-wrap">
                        <Link className="text-sm underline" href="/" >About</Link>
                        <Link className="text-sm underline" href="/" >Support Us</Link>
                        <Link className="text-sm underline" href="/" >Privacy</Link>
                        <Link className="text-sm underline" href="/" >Terms</Link>
                        <Link className="text-sm underline" href="/" >Contact Us</Link>
                    </div>
                </div>
            </div>
    )
}


export default withoutAuth(Home)

