import Section from "@/components/Section";
import { basics } from "@cv";

const About = () => {
    const { summary } = basics;
    return (
        <Section title="Sobre mí">
            <p className="text-[#666] font-mono text-wrap m-0">{summary}</p>
        </Section>
    );
};

export default About;
