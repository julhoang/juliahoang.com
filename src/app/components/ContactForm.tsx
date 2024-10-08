"use client";
import { useState } from "react";
import sendMail from "@/actions/sendMail";

export default function ContactForm() {
    const [buttonText, setButtonText] = useState("Send message");
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [sent, setSent] = useState(false);

    async function handleSubmit(formData: FormData) {
        setButtonText("Sending...");
        setButtonDisabled(true);

        const data = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        if (data.name && data.email) {
            const success = await sendMail(data.name, data.email, data.message);

            if (success) {
                setSent(true);
            } else {
                alert("Message failed to send. Please try again later.");
                setButtonText("Send message");
                setButtonDisabled(false);
            }
        }
    }

    return (
        <form
            className="max-w-xl w-full"
            action={handleSubmit}
        >
            {/* Name field */}
            <div className="mb-5">
                <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                    required
                />
            </div>

            {/* Email field */}
            <div className="mb-5">
                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                    placeholder="hi@gmail.com"
                    required
                />
            </div>

            {/* Message field */}
            <div className="mb-5">
                <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                    Your message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-black focus:border-black dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
                    placeholder="Leave a message..."
                ></textarea>
            </div>

            {/* Submit button */}
            {sent ? (
                <p className="text-emerald-800 font-medium dark:text-white">
                    Message sent 🎉! I'll get back to you as soon as I can.
                </p>
            ) : (
                <button
                    type="submit"
                    disabled={buttonDisabled}
                    className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    {buttonText}
                </button>
            )}
        </form>
    );
}
