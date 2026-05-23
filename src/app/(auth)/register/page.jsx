"use client"
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";
const RegisterPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const handleRegister = async(data) => {
        const { email, password, name, photo } = data;

        const { } = await authClient.signUp.email({
            name: "John Doe", // required
            email: "john.doe@example.com", // required
            password: "password1234", // required
            image: "https://example.com/image.png",
            callbackURL: "https://example.com/callback",
        });
    }
    return (
        <div className="max-w-lg min-h-[80vh] mx-auto flex justify-center items-center">
            <div className="">
                <h1 className="font-bold text-4xl text-gray-600 mb-12 text-center">Register your account</h1>

                <form onSubmit={handleSubmit(handleRegister)} className="space-y-2">

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-xl text-gray-500 mb-4">Name</legend>
                        <input type="text" {...register("name", { required: "This field is required" })} className="input py-5 pl-5 w-full" placeholder="Enter your name" />
                        {errors.name && <p className="font-bold text-red-400">{errors.name.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-xl text-gray-500 mb-4">Photo URL</legend>
                        <input type="text" {...register("photo", { required: "This field is required" })} className="input py-5 pl-5 w-full" placeholder="Enter your Photo URL" />
                        {errors.photo && <p className="font-bold text-red-400">{errors.photo.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-xl text-gray-500 mb-4">Email address</legend>
                        <input type="email" {...register("email", { required: "This field is required" })} className="input py-5 pl-5 w-full" placeholder="Enter your email address" />
                        {errors.email && <p className="font-bold text-red-400">{errors.email.message}</p>}
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-xl text-gray-500 mb-4">Email address</legend>
                        <input type="password" {...register("password", { required: "This field is required" })} className="input py-5 pl-5 w-full" placeholder="Enter your password address" />
                        {errors.password && <p className="font-bold text-red-400">{errors.password.message}</p>}
                    </fieldset>

                    <p className="font-bold text-gray-500">Accept Term & Conditions</p>
                    <button className="btn bg-[#333333] text-white w-full py-5 text-xl font-semibold">Register</button>
                </form>
            </div>
        </div>
    );
};


export default RegisterPage;