import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen p-8 sm:p-20 w-full">
            <p className="font-medium text-xl text-gray-800">Hey there, I’m</p>
            <Image
                src="/julia.png"
                alt="Julia Hoang"
                width={350}
                height={350}
                className="rounded-full"
            />
            <h1 className="font-bold text-9xl pb-3 -mt-5 text-center">Julia Hoang</h1>
            <p className="font-medium text-2xl">Software Developer based in Vancouver 🇨🇦</p>

            <div className="w-full md:w-1/2 text-center mt-5">
                <p className="text-xl mt-4">
                    Fresh out of UVic with my Computer Science degree (woohoo!!), I’m freelancing
                    while hunting for my dream job! If I'm not at my desk building sleek apps and
                    websites, I’m likely rallying on the tennis court 🎾.
                </p>
            </div>

            <p className="font-medium text-xl mt-10 text-gray-600">
                Scroll down to check out my projects, some silly games, and more!
            </p>
        </section>
    );
}
