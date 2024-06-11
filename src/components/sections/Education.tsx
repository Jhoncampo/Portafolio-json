import Section from "@/components/Section";
import { education } from "@cv";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

const Education = () => {
    return (
        <Section title="Educación">
            <ul className="flex flex-col gap-8 print:mb-36">
                {education.map(
                    ({ institution, url, area, startDate, endDate }) => {
                        const startYear = new Date(startDate).getFullYear();
                        const endYear = new Date(endDate).getFullYear();
                        const actualYear = new Date().getFullYear()
                        const years = actualYear < endYear ? `${startYear} - Actual` : `${startYear} - ${endYear}`
                        return (
                            <li>
                                <article>
                                    <header className="flex justify-between mb-1 items-start">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-medium text-[#111]">
                                                {institution}
                                            </h3>
                                            <Link href={url} className="font-medium text-[#111]">
                                                <FaLink />
                                            </Link>
                                        </div>
                                        <time className="text-sm text-[#555]">
                                            {years}
                                        </time>
                                    </header>
                                    <footer>
                                        <p className="text-[#666] font-mono">
                                            {area}
                                        </p>
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

export default Education;
