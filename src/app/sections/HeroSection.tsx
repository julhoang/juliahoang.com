import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center min-h-96 p-8 md:p-20 w-full border-4 border-slate-50">
            <p className="font-medium text-md md:text-xl">Hey there, I’m</p>
            <Image
                src="/julia.png"
                alt="Julia Hoang"
                width={350}
                height={350}
                priority={true}
            />
            <h1 className="font-bold text-6xl md:text-9xl pb-3 -mt-5 text-center text-amber-500">
                Julia Hoang
            </h1>
            <p className="font-medium text-xl md:text-2xl">
                Software Developer based in Vancouver 🇨🇦
            </p>

            <div className="w-full md:w-1/2 text-center mt-5">
                <p className="text-sm md:text-lg mt-4">
                    Fresh out of UVic with my Computer Science degree (woohoo!!), I’m freelancing
                    while hunting for my dream job! If I'm not at my desk building sleek apps and
                    websites, I’m likely rallying on a tennis court.
                </p>
            </div>

            <div className="w-full md:w-1/2 text-center mt-5">
                <p className="text-sm md:text-lg my-4">Find me on:</p>

                <a
                    href="https://www.linkedin.com/in/juliahoang/"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                >
                    LinkedIn
                </a>

                <a
                    href="https://github.com/julhoang"
                    className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-600 font-medium rounded-lg text-base px-6 py-3.5 me-2 mb-2 dark:bg-gray-700 dark:hover:bg-gray-800 focus:outline-none dark:focus:ring-gray-900"
                >
                    GitHub
                </a>
            </div>
        </section>
    );
}
