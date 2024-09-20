interface Project {
    media: string;
    projectName: string;
    description: string;
    stack: string[];
    url: string;
}

const projects: Project[] = [
    {
        media: "",
        projectName: "artisway.ca",
        description: "",
        stack: ["NextJS", "ChakraUI", "tailwindCSS", "Supabase (Postgres)"],
        url: "https://artisway.ca",
    }
];

export default function ProjectSection() {
    return (
        <div className="bg-green-50 p-5 sm:p-10 text-left">
            <h2 className="font-bold text-5xl md:text-7xl mb-2 text-green-800">web apps.</h2>
            <p className="text-lg md:text-xl md:w-1/2 mb-4 md:mb-8">
                I love building web apps that are both functional and visually appealing. Here are a
                few of the most notable projects I've worked on.
            </p>
        </div>
    );
}
