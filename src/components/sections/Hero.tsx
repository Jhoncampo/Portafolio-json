import { basics } from "@cv";
import Section from "../Section";
import WorldMap from "@/icons/WorldMap";
import { CiMail, CiGlobe  } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaInstagram  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
    const { name, label, image, location, profiles, phone, email } = basics;
    const { city, region } = location;

    const SOCIALICONS: any = {
        GitHub: FaGithub,
        LinkedIn: FaLinkedin,
        X: FaXTwitter,
        Instagram: FaInstagram
    };

    const linkedInfo = profiles.find(({network})=> network === "LinkedIn")
    const linkedUrl = linkedInfo?.url
    const printInfo = [email, phone, linkedUrl].filter(Boolean).join(" • ")
    return (
        <Section>
            <div className="flex items-center justify-between gap-4">
                <div className="flex flex-col gap-1 pr-8">
                    <h1 className="text-2xl font-medium">{name}</h1>
                    <h2 className="text-[#444] font-medium text-balance">
                        {label}
                    </h2>
                    <span className="flex items-center gap-2 font-mono text-[#444]">
                        <CiGlobe className="w-[18px] h-[18px]" />
                        {city}, {region}
                    </span>
                    <footer className="flex gap-1 mt-2">
                        <div className="hidden text-[#555] text-xs print:block">
                            {printInfo}
                        </div>
                        {email && (
                            <a
                                title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                                href={`mailto:${email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[32px] h-[32px] flex items-center justify-center text-[#777] p-1 border rounded-md transition-all duration-200 ease-linear border-[#eee] hover:bg-[#eee] print:hidden"
                            >
                                <CiMail className="w-[18px] h-[18px] " />
                            </a>
                        )}
                        {phone && (
                            <a
                                title={`Llamar por teléfono a ${name} al número ${phone}`}
                                href={`tel:${phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-[32px] h-[32px] flex items-center justify-center text-[#777] p-1 border rounded-md transition-all duration-200 ease-linear border-[#eee] hover:bg-[#eee] print:hidden"
                            >
                                <HiOutlinePhone className="w-[18px] h-[18px]" />
                            </a>
                        )}
                        {profiles.map(({ network, url, username }, index) => {
                            const Icon = SOCIALICONS[network];

                            return (
                                <a
                                    key={index}
                                    title={`Visitar el perfil de ${name} en ${network}`}
                                    href={url}
                                    target="_blank"
                                    className="w-[32px] h-[32px] flex items-center justify-center text-[#777] p-1 border rounded-md transition-all duration-200 ease-linear border-[#eee] hover:bg-[#eee] hover:border-[#ddd] print:hidden"
                                    rel="noopener noreferrer"
                                >
                                    <Icon className="w-[18px] h-[18px]" />
                                </a>
                            );
                        })}
                    </footer>
                </div>
                <figure>
                    <img
                        className="aspect-square object-cover w-[128px] rounded-2xl"
                        src={image}
                        alt={name}
                    />
                </figure>
            </div>
        </Section>
    );
};

export default Hero;
