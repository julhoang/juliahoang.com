import ContactForm from "@/app/components/ContactForm";

export default function ContactSection() {
    return (
        <div className="p-5 sm:p-10 text-left border-4 border-slate-50">
            {/*-------- Section header --------*/}
            <h2 className="font-bold text-5xl md:text-7xl text-zinc-800">let's chat 😄</h2>

            <div className="md:grid md:grid-cols-2 gap-10 md:gap-10 py-10 h-fit">
                {/*-------- Blurb --------*/}
                <div className="mb-10">
                    <p className="text-lg md:text-xl mb-4 md:mb-8">
                        I'm always open to new opportunities and making connections! Feel free to me
                        leave a message using the form, or reach me via email or LinkedIn. I'll get
                        back to you as soon as I can!
                    </p>

                    <a
                        href="mailto:julia@juliahoang.com"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        Email
                    </a>

                    <a
                        href="https://www.linkedin.com/in/juliahoang/"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    >
                        LinkedIn
                    </a>
                </div>

                {/*-------- Contact Form --------*/}
                <ContactForm />
            </div>
        </div>
    );
}
