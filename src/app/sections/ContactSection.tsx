import ContactForm from "@/app/components/ContactForm";
import { SecondaryButton } from "@/app/components/Button";

export default function ContactSection() {
    return (
        <section
            className="p-5 sm:p-10 text-left border-4 border-slate-50"
            id="contact"
        >
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


                    <SecondaryButton
                        url="mailto:julia@juliahoang.com"
                        text="Email"
                    />

                    <SecondaryButton
                        url="https://www.linkedin.com/in/juliahoang/"
                        text="LinkedIn"
                    />
                </div>

                {/*-------- Contact Form --------*/}
                <ContactForm />
            </div>
        </section>
    );
}
