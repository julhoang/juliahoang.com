import ImageRounded from "../components/ImageRounded";

interface Graphics {
    media: string;
    name: string;
    url: string;
}

export default function GraphicsSection() {
    return (
        <section className="bg-pink-50 p-5 sm:p-10 text-left bg-opacity-50  dark:border-x-4 dark:text-gray-300 dark:border-slate-500 dark:bg-transparent">
            {/*-------- Section header --------*/}
            <h2 className="font-bold text-5xl md:text-7xl mb-2 text-pink-600">graphics.</h2>
            <p className="text-lg md:text-xl md:w-1/2 mb-4 md:mb-8">
                Some fun projects from the Intro to Animations and Digital Arts courses at UVic,
                where we learnt HTML, CSS, JavaScript, WebGL, and a bit of ChatGPT for creative
                arts.
            </p>

            <p className="md:hidden text-gray-700 text-sm pb-5 dark:text-gray-400">
                *Sorry, some of these projects might not be mobile-friendly. For the best
                experience, please view them on a desktop or laptop.
            </p>

            {/*------- Graphics Grid -------*/}
            <div className="grid grid-rows sm:grid-cols-2 md:grid-cols-3 gap-5">
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className="w-full text-center"
                    >
                        <a href={project.url}>
                            <ImageRounded
                                src={project.media}
                                alt={project.name}
                                small={true}
                            />

                            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                View {project.name}
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

const projects: Graphics[] = [
    {
        media: "/graphics/fish.png",
        name: "Fishy Fish",
        url: "https://julhoang.github.io/webgl-fish-graphics/",
    },
    {
        media: "/graphics/plant.png",
        name: "Spinny Spin",
        url: "https://julhoang.github.io/webgl-plants-graphics/",
    },
    {
        media: "/graphics/90s-lofi.png",
        name: "90s Lofi",
        url: "https://julhoang.github.io/90s-lofi/",
    },
];
