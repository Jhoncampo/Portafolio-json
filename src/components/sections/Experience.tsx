import Section from "@/components/Section";
import { work } from "@cv";

const Experience = () => {
    return (
        <Section title="Experience">
            <ul className="flex flex-col gap-8">
                {work.map(
                    ({
                        name,
                        startDate,
                        endDate,
                        position,
                        summary,
                        highlights,
                    }) => {
                        const startYear = new Date(startDate).getFullYear();
                        const endYear =
                            endDate != null
                                ? new Date(endDate).getFullYear()
                                : "Actual";
                        const years = `${startYear} - ${endYear}`;
                        return (
                            <li className="">
                                <article className="">
                                    <header className="flex justify-between mb-1 items-start">
                                        <div>
                                            <h3 className="font-medium text-[#111]">
                                                {name}
                                            </h3>
                                            <h4 className="font-normal text-[#222]">
                                                {position}
                                            </h4>
                                        </div>
                                        <time className="text-sm text-[#555]">{years}</time>
                                    </header>
                                    <footer>
                                        <p className="text-[#666] font-mono">{summary}</p>
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

export default Experience;
