"use client"
import { Button } from "@/components/inputs"
import { useEffect, useState } from "react"


const HomePage = () => {
    
    const [name , setName] = useState('shubam')


    


    return (
        <div>
            {name}
            <Button onClick={ () => setName('navraj') }   label="Click ME" />
        </div>
    )
}


export default HomePage