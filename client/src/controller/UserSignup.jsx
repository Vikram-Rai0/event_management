// import { useState } from "react"
const UserSignup = () => {
    return (

        <div className="h-[100vh] w-[100vw] flex justify-center items-center">
            <div className="container shadow-xl rounded-b-sm h-[70vh] w-[50vw] flex">
                {/* --------------------------------------------------------------------------------------------- */}
                <div className="imageDiv  w-[45%] flex justify-center items-center">
                    <img src="../../public/images/Forms-amico.png " alt="" className="h-fit " />
                </div>
                {/* -------------------------------------------------------------------------------------------------- */}
                <div className="formContainer  w-[60%]  flex flex-col justify-center items-center relative">
                    <i className="fa-solid fa-xmark text-[large] absolute top-1.5 right-2"></i>

                    <h1 className="font-extrabold text-2xl m-5 ">Sign Up</h1>
                    <form action="" className="  grid  ">
                        <div className="usernameContainer  relative ">
                            <i className="fa-solid fa-user absolute  bottom-3.5 text-sm mb-0.5"></i>
                            <input type="text" placeholder="Username" className="border-b-2 border-solid border-black  text-sm focus:outline-none my-2.5 w-[20vw] pl-5 " />
                        </div>


                        <div className="emailContainer relative">
                            <i className="fa-solid fa-envelope text-1xl absolute  bottom-3.5 text-sm mb-0.5"></i>
                            <input type="email" placeholder="Email" className="border-b-2 border-solid text-sm focus:outline-none my-2.5 w-[20vw] pl-5 " />
                        </div>
                        <div className="passwordContainer relative">
                            <i className="fa-solid fa-lock absolute  bottom-3.5 text-sm mb-0.5"></i>
                            <input type="password" placeholder="Password" className="border-b-2 border-solid text-sm border-black focus:outline-none my-2.5  w-[20vw] pl-5  " />
                        </div>
                        <div className="roleContainer relative">
                            <i className="fa-solid fa-users absolute  bottom-3 text-sm mb-0.5"></i>
                            <select name="Select Role" id="" className="text-[#7D7D91] border-b-2 border-solid  focus:outline-none w-[100%] my-2.5 pl-5 ">
                                <option value="" disabled selected className="  ">Select Role</option>
                                <option value="">User</option>
                                <option value="">Orginizer</option>
                            </select></div>
                        <div className="phonenumberContainer relative">
                            <i className="fa-solid fa-phone absolute  bottom-3.5 text-sm mb-0.5"></i>
                            <input type="text" placeholder="Phone number" className="border-b-2 border-solid border-black text-sm focus:outline-none my-2.5 w-[20vw] pl-5 " />
                        </div>
                        <div className="buttonContainer w-full flex justify-center">

                            <button className="w-[95%] text-white mt-2 rounded-4xl h-8 bg-gradient-to-r from-[#197089] to-[#03988c]">Submit</button>
                        </div>

                    </form>

                </div>


            </div>
        </div>


    )
}

export default UserSignup;
