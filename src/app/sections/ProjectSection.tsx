import ProjectCard, { ProjectDetails } from "@/app/components/ProjectCard";
import Video from "@/app/components/Video";
import ImageRounded from "@/app/components/ImageRounded";

export default function ProjectSection() {
    return (
        <div className="bg-teal-50 p-5 sm:p-10 text-left bg-opacity-25 border-x-4 border-gray-50">
            {/*-------- Section header --------*/}
            <h2 className="font-bold text-5xl md:text-7xl mb-2 text-teal-700">web apps.</h2>
            <p className="text-lg md:text-xl md:w-1/2 mb-4 md:mb-8">
                I love building web apps that don’t just work well, but ideally also look clean and
                sleek. Check out some of my favorite projects below!
            </p>

            {/*-------- Project listings --------*/}
            <div className="grid md:grid-rows-3 divide-y">
                <div className="md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <ImageRounded
                        src={projects[0].media}
                        alt="Artisway.ca business card"
                    />
                    <ProjectCard {...projects[0]} />
                </div>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <ProjectCard {...projects[1]} />
                    <Video src={projects[1].media} />
                </div>

                <div className="md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <Video src={projects[2].media} />
                    <ProjectCard {...projects[2]} />
                </div>
            </div>
        </div>
    );
}

const projects: ProjectDetails[] = [
    {
        media: "/artisway.png",
        occasion: "Feb 2024 - Present",
        projectName: "Artisway.ca 🎨",
        description:
            "Artisway is a user-friendly digital marketplace connecting local artisans and craft enthusiasts on Vancouver Island to showcase and sell unique handmade goods. Developed as part of the Start-up Programming course at UVic, this project taught us how to build a startup from the ground up, focusing not only on technical development but also on the business side of things.",
        stack: ["NextJS (app)", "ChakraUI", "tailwindCSS", "Supabase (PostgreSQL)", "Prisma"],
        demo: "https://artisway.ca",
        demoText: "Visit Artisway.ca",
        color: "green",
    },
    {
        media: "/pantrypal.mov",
        occasion: "Jan - Apr 2023",
        projectName: "PantryPal 🥕",
        description:
            "PantryPal is a web app that aims to help users manage their pantry more effectively and reduce food waste by tracking pantry items and recommending recipes using ingredients that will soon expire. This app simplifies the process of finding recipes and ensure that users maximize their ingredient usage before they go bad. Made as a team project for Requirements Engineering course.",
        stack: [
            "NextJS (pages)",
            "ChakraUI",
            "Supabase (PostgreSQL)",
            "Prisma",
            "Cucumber w/ Selenium",
            "Jest",
        ],
        url: "https://github.com/julhoang/pantrypal",
        color: "green",
    },
    {
        media: "/notella.mp4",
        occasion: "Jun - Aug 2021",
        projectName: "Notella 📝",
        description:
            "Notella is a Chrome Extension that lets you save highlighted text from any webpage, neatly organizing it all in one place. It stores everything in localStorage, so your highlights are always right where you left them. My first ever personal project to access my skills before starting university!",
        stack: ["HTML", "CSS", "JavaScript", "localStorage"],
        url: "https://github.com/julhoang/Notella",
        color: "green",
    },
];
