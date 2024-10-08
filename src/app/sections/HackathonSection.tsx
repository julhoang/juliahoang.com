import ProjectCard, { ProjectDetails } from "@/app/components/ProjectCard";
import Video from "@/app/components/Video";
import ImageRounded from "@/app/components/ImageRounded";

export default function HackathonSection() {
    return (
        <section className="bg-slate-50 p-5 sm:p-10 text-left">
            {/*-------- Section header --------*/}
            <h2 className="font-bold text-5xl md:text-7xl mb-2 text-blue-700">hackathons.</h2>
            <p className="text-lg md:text-xl md:w-1/2 mb-4 md:mb-8">
                Adrenaline-fueled competitions, powered by too much coffee ☕, greasy pizza 🍕, and
                a mountain of salty chips 🥨.
            </p>

            {/*-------- Project listings --------*/}
            <div className="grid md:grid-rows-3 divide-y">
                <div className="md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <Video src={hackathons[0].media} />
                    <ProjectCard {...hackathons[0]} />
                </div>

                <div className="flex flex-col-reverse md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <ProjectCard {...hackathons[1]} />
                    <Video src={hackathons[1].media} />
                </div>

                <div className="md:grid md:grid-cols-2 py-10 md:gap-10 h-fit">
                    <ImageRounded
                        src={hackathons[2].media}
                        alt="NoteNetwork screenshot"
                        url={hackathons[2].url}
                    />

                    <ProjectCard {...hackathons[2]} />
                </div>
            </div>
        </section>
    );
}

const hackathons: ProjectDetails[] = [
    {
        media: "/hackathons/WEC_Game.mp4",
        occasion: "Western Engineering Competition 2023 - 1st Place in Team Programming 🥇",
        projectName: "ExploreBC 🏕️",
        description:
            "A game for elementary students to learn about the beautiful nature of British Columbia. Students have 2 minutes to find all emojis that would unlock different facts about BC's nature. Once the game finishes, students can take a quiz to test their understanding. Developed in 8 hours with my amazing team - Eduardo and Nishchint!",
        stack: ["NextJS", "CharkaUI", "localStorage"],
        url: "https://github.com/julhoang/wec-2023-neossat",
        demo: "https://wec-2023-neossat.vercel.app/",
        color: "blue",
    },
    {
        media: "/hackathons/MedMate_Client.mov",
        occasion: "#islandHealth Code Hack 2023",
        projectName: "MedMate 💊",
        description:
            "MedMate is a system of 3 apps. Within 24 hours, my friends Chris, Matthew and I developed a system facilitating all doctors and patients interactions with a central health database. The system includes: <br/>✔️ A web app for patients to view and control their own health records. <br/>✔️ A cross-platform app (currently designed for iPad) for doctors to write to the health database. <br/>✔️ A webpage to show a person's public info in case of emergency.",
        stack: ["NextJS", "ChakraUI"],
        url: "https://github.com/julhoang/code_hack_patient_app",
        color: "blue",
    },
    {
        media: "/hackathons/notenetwork.png",
        occasion: "UVic's VikeLabs Summer 2024 - 3rd place 🥉",
        projectName: "NoteNetwork 📚",
        description:
            "NoteNetwork is a platform where UVic students can share curated links and videos for specific courses, saving time and effort for future students. Developed in 5 hours with my besties - Chris and Khushboo!",
        stack: ["NextJS", "Firebase", "RadixUI", "shadcn/ui"],
        url: "https://github.com/julhoang/notenetwork/tree/main",
        color: "blue",
    },
];