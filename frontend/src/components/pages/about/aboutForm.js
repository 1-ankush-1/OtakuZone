import { useState } from "react";
import Input from "../../ui/input";
import aboutServices from "../../../services/aboutService";

const AboutForm = () => {
    const [collabIndividual, setCollabIndividual] = useState({
        name: "",
        email: "",
        message: ""
    })

    const handleOnChangeCollabIndividualInput = (e) => {
        setCollabIndividual((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        })
    }

    const handleCollabIndividual = (e) => {
        e.preventDefault();
        aboutServices.askQuestions(collabIndividual);
    }

    return (
        <form className="mx-auto max-w-sm space-y-4" onSubmit={handleCollabIndividual}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                    label="Name"
                    id="name"
                    name="name"
                    value={collabIndividual.name}
                    onChange={handleOnChangeCollabIndividualInput}
                    type="text"
                    placeholder="Enter your name"
                />
                <Input
                    label="Email"
                    id="email"
                    name="email"
                    value={collabIndividual.email}
                    onChange={handleOnChangeCollabIndividualInput}
                    type="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm" htmlFor="message">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:border-blue-500 min-h-[100px]"
                    placeholder="Enter your message"
                    value={collabIndividual.message}
                    onChange={handleOnChangeCollabIndividualInput}
                ></textarea>
            </div>
            <button type="submit" className="w-full bg-black text-white px-6 py-3 rounded-md hover:bg-blue-600 transition duration-300 focus:outline-none">
                Submit
            </button>
        </form>
    )
}

export default AboutForm;