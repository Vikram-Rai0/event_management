import { useState } from "react"
import axios from "axios";

const UserSignup = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        password_hash: "",
        type: "",
        phone: "",

    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(data);

        const apiUrl = "http://localhost:3000/api/user";

        try {
            const response = await axios.post(apiUrl, data);
            console.log("Signup successful:", response.data);

            setData({
                name: "",
                email: "",
                password_hash: "",
                type: "",
                phone: ""
            })
        } catch (error) {
            // Handle errors
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("Signup failed:", error.response.data);
            } else if (error.request) {
                // The request was made but no response was received
                console.log("No response received:", error.request);
            } else {
                // Something happened in setting up the request
                console.log("Error in setting up the request:", error.message);
            }
        }


    }
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

                    <h1 className="font-extrabold text-2xl m-5 ">Login</h1>
                    <form action="" className="  grid  " onSubmit={handleSubmit}>


                        <div className="emailContainer relative">
                            <i className="fa-solid fa-envelope text-1xl absolute  bottom-3.5 text-sm mb-0.5"></i>
                            <input type="email" placeholder="Email" name="email" value={data.email} onChange={handleChange} className="border-b-2 border-solid text-sm focus:outline-none my-2.5 w-[20vw] pl-5 " />
                        </div>
                        <div className="passwordContainer relative">
                            <i className="fa-solid fa-lock absolute  bottom-3.5 text-sm mb-0.5"></i>
                            <input type="password" placeholder="Password" name="password_hash" value={data.password_hash} onChange={handleChange} className="border-b-2 border-solid text-sm border-black focus:outline-none my-2.5  w-[20vw] pl-5  " />
                        </div>

                        <div className="buttonContainer w-full flex justify-center">

                            <button type="submit" className="w-[95%] text-white mt-2 rounded-4xl h-8 bg-gradient-to-r from-[#197089] to-[#03988c]">Submit</button>
                        </div>

                    </form>

                </div>


            </div>
        </div>


    )
}

export default UserSignup;
