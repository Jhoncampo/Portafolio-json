import Section from "@/components/Section";
import cv from "@cv";
import {
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
    FaReact,
    FaDocker ,
    FaCloudflare,
    FaPython
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiTailwindcss, SiNestjs, SiFlutter, SiKotlin } from "react-icons/si";
import { TbBrandNextjs, TbBrandCSharp } from "react-icons/tb";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMsqlServer } from "react-icons/di";



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
    Nestjs: SiNestjs,
    Docker: FaDocker,
    Cloudflare: FaCloudflare,
    Python: FaPython,
    Flutter: SiFlutter,
    Kotlin: SiKotlin,
    Csharp: TbBrandCSharp,
    Postgresql: BiLogoPostgresql,
    Sqlserver: DiMsqlServer
};

const Skills = () => {
    return (
        <Section title="Habilidades">
            <ul className="inline-flex gap-2 flex-wrap">
                {cv.skills.map(({ name, id }, index) => {
                    const Icono = ICONS_SKILLS[id];
                    return (
                        <li key={index} className="rounded-md bg-gray-200 flex items-center gap-1 hover:bg-gray-300 text-gray-950 text-sm font-medium px-2 py-1">
                            <Icono /> <span>{name}</span>
                        </li>
                    );
                })}
            </ul>
        </Section>
    );
};

export default Skills;
