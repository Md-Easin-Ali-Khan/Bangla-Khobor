"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye } from "react-icons/fi";
import { PiEyeSlashDuotone } from "react-icons/pi";
const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isShowPassword, setIsShowPassword] = useState(false)

    const handleLogin = async (data) => {
        console.log("data", data);

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
            callbackURL: "/",
        });

        console.log(res, error)
    }
    return (
        <div className="max-w-lg min-h-[80vh] mx-auto flex justify-center items-center">
            <div className="">
                <h1 className="font-bold text-4xl text-gray-600 mb-24 text-center">Login your account</h1>

                <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-xl text-gray-500 mb-4">Email address</legend>
                        <input type="email" {...register("email", { required: "This field is required" })} className="input py-5 pl-5 w-full cursor-pointer" placeholder="Enter your email address" />
                        {errors.email && <p className="font-bold text-red-400">{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset relative">
                        <legend className="fieldset-legend font-semibold text-xl text-gray-500 mb-4">Password</legend>
                        <input type={isShowPassword ? "text" : "password"} {...register("password", { required: "This field is required" })} className="input py-5 pl-5 w-full cursor-pointer" placeholder="Enter your password address" />

                        <span onClick={() => setIsShowPassword(!isShowPassword)} className="absolute right-2 top-5">{isShowPassword ? <FiEye /> : <PiEyeSlashDuotone />
                        }</span>

                        {errors.password && <p className="font-bold text-red-400">{errors.password.message}</p>}
                    </fieldset>

                    <button className="btn bg-[#333333] text-white w-full py-5 text-xl font-semibold">Login</button>
                    <p className="text-gray-500">Dont’t Have An Account ? <Link href={"/register"} className="text-red-500">Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;