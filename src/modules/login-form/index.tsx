import {Button, InputGroup, TextField} from "@/components/inputs";
import React from "react";

import {nopeResolver} from '@hookform/resolvers/nope';
import Nope from 'nope-validator';
import {useForm} from "react-hook-form";
import {hasNecessaryDependencies} from "next/dist/lib/has-necessary-dependencies";


const resolver = nopeResolver(
    Nope.object().shape({
        email: Nope.string().email("Invalid Email").required("Email is required"),
        password: Nope.string().min(6, "Password must be greater than or equal to 6 letter").max(127, "Password must be  less than or equal to 127 letter")

    }))

type Inputs = {
    email  : string
    password : string
}

const LoginForm = () => {


    const { register, handleSubmit, formState } = useForm<Inputs>({
        resolver : resolver
    })


    // Login for logging user in

    const login = (values : Inputs) => {
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit(login)}>
            <h2 className="text-2xl mt-2 mb-4">
                Login to UNIARC
            </h2>
            <TextField label="Username" placeholder="john@sandhu" type="text" {...register("email")} error={formState.errors.email && formState.errors.email.message} />
            <TextField label="Password" placeholder="*****" type="password" {...register("password")} error={formState.errors.password && formState.errors.password.message}/>
            <InputGroup>
                <span className="underline">Forgot Password?</span>
            </InputGroup>
            <InputGroup>
                <Button type="submit" fullWidth label="Continue"/>
            </InputGroup>
            <InputGroup>
                <span>Don{"'"}t have an  account? <span className="underline"> Register </span></span>
            </InputGroup>
        </form>
    )
}


export default LoginForm