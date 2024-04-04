import { basics } from "@cv";
import Section from "../Section";
import Mail from "@/icons/Mail";
import Phone from "@/icons/Phone";
import GitHub from "@/icons/GitHub";
import X from "@/icons/X";
import LinkedIn from "@/icons/Linkedin";
import WorldMap from "@/icons/WorldMap";

const Hero = () => {
    const { name, label, image, location, profiles, phone, email } = basics;
    const { city, region } = location;

    const SOCIALICONS: any = {
        GitHub,
        LinkedIn,
        X,
    };
    return (
        <Section>
            <div className="flex items-center justify-between gap-4">
                <div className="">
                    <h1 className="text-3xl font-medium">{name}</h1>
                    <h2 className="text-[#444] font-medium text-balance">{label}</h2>
                    <span className="flex gap-3">
                        <WorldMap/>
                        {city}, {region}
                    </span>
                    <footer className="flex gap-3">
                        {email && (
                            <a
                                title={`Enviar un correo electrónico a ${name} al correo ${email}`}
                                href={`mailto:${email}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Mail />
                            </a>
                        )}
                        {phone && (
                            <a
                                title={`Llamar por teléfono a ${name} al número ${phone}`}
                                href={`tel:${phone}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Phone />
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
                                    rel="noopener noreferrer"
                                >
                                    <Icon />
                                </a>
                            );
                        })}
                    </footer>
                </div>
                <figure>
                     <img className="aspect-square object-cover w-[128px] rounded-2xl" src={image} alt={name} />
                </figure>
            </div>
        </Section>
    );
};

export default Hero;
