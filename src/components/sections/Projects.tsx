import Section from "@/components/Section";
import { projects } from "@cv";

const Projects = () => {
    return (
        <Section title="Projects">
            <ul className="grid grid-cols-custom gap-4">
                {projects.map(
                    ({ url, description, highlights, name, isActive }) => {
                        return (
                            <li className=" ">
                                <article className="rounded-lg border border-[#f2f2f2] flex flex-col p-4 h-full gap-4">
                                    <header className="flex flex-1 flex-col">
                                        <h3 className="font-semibold">
                                            <a
                                                href={url}
                                                target="_blank"
                                                className="text-[#111] hover:underline"
                                                title={`Ver el proyecto ${name}`}
                                            >
                                                {name}
                                            </a>
                                            {isActive && (
                                                <span className="text-green-500">
                                                    {" "}
                                                    •
                                                </span>
                                            )}
                                        </h3>
                                        <p className="font-mono text-[14px] leading-5 mb-1 text-[#666]">
                                            {description}
                                        </p>
                                    </header>
                                    <footer className="flex flex-wrap gap-1 text-xs">
                                        {highlights.map((highlight) => {
                                            return (
                                                <span className="rounded-md bg-[#eee] text-[#444] text-[11px] font-medium py-1 px-2">
                                                    {highlight}
                                                </span>
                                            );
                                        })}
                                    </footer>
                                </article>
                            </li>
                        );
                    }
                )}
            </ul>
        </Section>
    );
};

export default Projects;
