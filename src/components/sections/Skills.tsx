import Section from "@/components/Section";
import { skills } from "@cv";

const Skills = () => {
    return (
        <Section title="Skills">
            <ul className="inline-flex gap-2 flex-wrap">
                {skills.map(({ name }) => (
                    <li className="rounded-md bg-[#eee] text-black text-sm font-medium px-2 py-1">
                        <span>{name}</span>
                    </li>
                ))}
            </ul>
        </Section>
    );
};

export default Skills;
