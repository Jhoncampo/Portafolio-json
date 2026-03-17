import Section from "@/components/Section";
import cv from "@cv";
import Link from "next/link";
import { FaLink } from "react-icons/fa6";

const Education = () => {
    return (
        <Section title="Educación">
            <ul className="flex flex-col gap-4 print:mb-8">
                {cv.education.map(
                    ({ institution, url, area, startDate, endDate }, index) => {
                        const startYear = new Date(startDate).getFullYear();
                        const endYear = new Date(endDate).getFullYear();
                        const actualYear = new Date().getFullYear();
                        const years =
                            actualYear < endYear
                                ? `${startYear} - Actual`
                                : `${startYear} - ${endYear}`;
                        return (
                            <li key={index}>
                                <article>
                                    <header className="flex justify-between mb-1 items-start">
                                        <div>
                                            <h3 className="font-medium  text-[#111]">
                                                {institution}
                                                <Link
                                                target="_blank"
                                                    href={url}
                                                    className="font-medium ml-2 inline-block text-[#111] print:hidden"
                                                >
                                                    <FaLink />
                                                </Link>
                                            </h3>
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
