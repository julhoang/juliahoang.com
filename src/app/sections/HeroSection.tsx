import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center min-h-96 p-8 md:p-20 w-full border-4 border-slate-50 pb-20 mt-12 dark:text-gray-300 dark:border-slate-500">
            <p className="font-medium text-md md:text-xl dark:text-gray-400">Hey there, I’m</p>

            {/*-------- Hero Image --------*/}
            <Image
                src="/julia.png"
                alt="Julia Hoang"
                width={350}
                height={350}
                priority={true}
            />

            {/*-------- Hero Text --------*/}
            <h1 className="font-bold text-6xl md:text-9xl pb-3 -mt-5 text-center text-gray-800 dark:text-gray-200">
                Julia Hoang
            </h1>

            <p className="font-medium text-lg md:text-2xl text-center">
                Software Developer based in Vancouver 🇨🇦
            </p>

            <div className="w-full md:w-1/2 text-center md:mt-5">
                <p className="text-sm md:text-lg mt-4">
                    Fresh out of UVic with my Computer Science degree (woohoo!!), I’m freelancing
                    while hunting for my dream job! If I'm not at my desk building sleek apps and
                    websites, I’m likely rallying on a tennis court.
                </p>
            </div>

            <div className="flex flex-row w-full items-center justify-center sm:hidden -ml-5 mt-5">
                <div className="blob green"></div>
                <p className="font-medium text-sm">Available For Work</p>
            </div>

            {/*-------- Social --------*/}

            <div className="w-full md:w-1/2 text-center mt-5 sm:mt-10">
                <a
                    href="https://www.linkedin.com/in/juliahoang/"
                    className="text-gray-900 bg-white border border-gray-700 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                    LinkedIn
                </a>

                <a
                    href="https://github.com/julhoang"
                    className="text-gray-900 bg-white border border-gray-700 focus:outline-none hover:bg-gray-900 hover:text-white focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                    GitHub
                </a>
            </div>
        </section>
    );
}
