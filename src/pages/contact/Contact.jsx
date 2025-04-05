import { useState } from "react";
import toast from "react-hot-toast";
import { ImSpinner9 } from "react-icons/im";

const Contact = () => {
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true)
        const formData = new FormData(event.target);

        formData.append("access_key", "ab27b3c3-3482-47df-89b9-f3cd8eeed071");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        await response.json();

        toast.success("Form Submitted Successfully")
        event.target.reset();
        setLoading(false)

    }
    return (
        <section className="mx-3">
            <div className="w-full max-w-4xl mx-auto px-3 mt-20 mb-10 p-6 border rounded-lg border-gray-200 md:px-10">

                {/* title */}
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-[2rem] font-bold text-primary leading-[36px]">Contact Us</h1>
                    <p className="text-[1rem] text-[#424242]">Please fill the all fields to contact us.</p>
                </div>

                {/* form area */}
                <form onSubmit={handleSubmit} className="w-full mt-[50px]">
                    <div className="flex flex-col sm:flex-row items-center gap-[20px]">
                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="relative">
                                <input type="text" required name="name"
                                    className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300"
                                />
                                <span
                                    className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-[#bdbaba] peer-focus:px-1 transition-all duration-300 ">
                                    Your name
                                </span>
                            </label>
                        </div>

                        <div className="flex flex-col gap-[5px] w-full sm:w-[50%]">
                            <label className="relative">
                                <input type="number" required name="number"
                                    className="peer border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300"
                                />
                                <span
                                    className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-[#bdbaba] peer-focus:px-1 transition-all duration-300 ">
                                    Your Mobile Number
                                </span>
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-[5px] w-full mt-[20px]">
                        <label className="relative w-full">
                            <textarea
                            required name="message"
                                className="peer min-h-[200px] border-[#e5eaf2] border rounded-md outline-none px-4 py-3 w-full focus:border-primary transition-colors duration-300"
                            ></textarea>
                            <span
                                className=" absolute top-3 left-5 peer-focus:-top-3 peer-focus:bg-white peer-focus:left-2 peer-focus:scale-[0.9] peer-focus:text-primary text-[#777777] peer-focus:px-1 transition-all duration-300 ">
                                Write Message
                            </span>
                        </label>
                    </div>


                    <button
                        type="submit"
                        className="py-2 px-6 border border-primary text-primary rounded font-medium relative overflow-hidden z-10 mt-2.5 
 transition-all duration-300 ease-in-out 
 hover:text-white 
 before:absolute before:inset-0 before:bg-primary 
 before:-z-10 before:origin-left before:scale-x-0 
 hover:before:scale-x-100 
 before:transition-transform before:duration-300 before:ease-in-out cursor-pointer"
                    >
                        {loading ? <ImSpinner9 className="text-2xl mx-auto animate-spin"/> : "Submit" }
                    </button>

                </form>
            </div>
        </section>
    );
};

export default Contact;
