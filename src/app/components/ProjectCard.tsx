import GitHubButton from "./GitHubButton";

export interface ProjectDetails {
    media: string;
    competition?: string;
    projectName: string;
    description: string;
    stack: string[];
    url: string;
    demo?: string;
    color: "blue" | "green";
}

interface CustomStyling {
    text: string;
    badge: string;
    button: string;
}

const blueStyles: CustomStyling = {
    text: "text-blue-800",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    button: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-fit",
};

const greenStyles: CustomStyling = {
    text: "text-emerald-700",
    badge: "bg-green-200 text-emerald-800 dark:bg-green-900 dark:text-green-300",
    button: "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
};

export default function ProjectCard({
    competition,
    projectName,
    description,
    stack,
    url,
    demo,
    color,
}: ProjectDetails) {
    const styles = color == "blue" ? blueStyles : greenStyles;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-between h-full">
                {/*-------- Project Details --------*/}
                <div>
                    <p className="font-semibold text-sm">{competition}</p>
                    <h3 className={"font-bold text-3xl my-2 " + styles.text}>{projectName}</h3>
                    <p
                        className="whitespace-normal"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>

                    <div className="my-5">
                        {stack.map((tech) => (
                            <span
                                key={tech}
                                className={
                                    "text-sm font-medium me-2 px-2.5 py-0.5 rounded whitespace-pre-wrap " +
                                    styles.badge
                                }
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/*-------- Buttons --------*/}
                <div className="flex flex-col md:flex-row md:gap-0">
                    {demo && (
                        <a
                            href={demo}
                            type="button"
                            className={styles.button}
                        >
                            View Demo
                        </a>
                    )}

                    <GitHubButton url={url} />
                </div>
            </div>
        </div>
    );
}
