import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center min-h-96 p-8 md:p-20 w-full border-4 border-slate-50 pb-20">
            <p className="font-medium text-md md:text-xl">Hey there, I’m</p>

            {/*-------- Hero Image --------*/}
            <Image
                src="/julia.png"
                alt="Julia Hoang"
                width={350}
                height={350}
                priority={true}
            />

            {/*-------- Hero Text --------*/}
            <h1 className="font-bold text-6xl md:text-9xl pb-3 -mt-5 text-center text-gray-800">
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

            {/*-------- Social --------*/}

            <div className="w-full md:w-1/2 text-center mt-10">
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
