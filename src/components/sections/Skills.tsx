import Section from "@/components/Section";
import { skills } from "@cv";
import {
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";

const ICONS_SKILLS: any = {
    Html: FaHtml5,
    Css: FaCss3,
    Javascript: IoLogoJavascript,
    Tailwind: SiTailwindcss,
    Typescript: SiTypescript,
    Node: FaNodeJs,
    Mysql: GrMysql,
    Git: FaGitAlt,
    Github: FaGithub,
    Next: TbBrandNextjs,
    React: FaReact,
};

const Skills = () => {
    return (
        <Section title="Habilidades">
            <ul className="inline-flex gap-2 flex-wrap">
                {skills.map(({ name, id }) => {
                    const Icono = ICONS_SKILLS[id];
                    return (
                        <li className="rounded-md bg-gray-200 flex items-center gap-1 hover:bg-gray-300 text-gray-950 text-sm font-medium px-2 py-1">
                            <Icono /> <span>{name}</span>
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
};

export default Skills;
