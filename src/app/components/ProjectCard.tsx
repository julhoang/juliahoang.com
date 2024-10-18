import { GitHubButton, SecondaryButton } from "./Button";

export interface ProjectDetails {
    media: string;
    occasion?: string;
    projectName: string;
    description: string;
    stack: string[];
    url?: string;
    demo?: string;
    demoText?: string;
    color: "blue" | "green";
}

interface CustomStyling {
    text: string;
    badge: string;
    button: string;
}

const blueStyles: CustomStyling = {
    text: "text-blue-800 dark:text-blue-600",
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-50",
    button: "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-fit",
};

const greenStyles: CustomStyling = {
    text: "text-teal-700 dark:text-teal-200",
    badge: "bg-teal-100 text-teal-800 dark:bg-green-900 dark:text-green-300",
    button: "focus:outline-none text-white bg-teal-700 hover:bg-teal-900 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
};

export default function ProjectCard({
    occasion,
    projectName,
    description,
    stack,
    url,
    demo,
    demoText,
    color,
}: ProjectDetails) {
    const styles = color == "blue" ? blueStyles : greenStyles;

    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col justify-between h-full">
                {/*-------- Project Details --------*/}
                <div>
                    <p className="font-semibold text-sm">{occasion}</p>
                    <h3 className={"font-bold text-3xl my-2 " + styles.text}>{projectName}</h3>
                    <p
                        className="whitespace-normal"
                        dangerouslySetInnerHTML={{ __html: description }}
                    ></p>

                    <div className="my-5 flex flex-wrap">
                        {stack.map((tech) => (
                            <span
                                key={tech}
                                className={
                                    "text-sm font-medium me-2 px-2 py-0.5 my-1 rounded " +
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
                        <SecondaryButton
                            text={demoText ?? "View Demo"}
                            url={demo}
                        />
                    )}

                    {url && <GitHubButton url={url} />}
                </div>
            </div>
        </div>
    );
}
