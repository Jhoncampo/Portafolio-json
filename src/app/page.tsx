import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import KeyboardManager from "@/components/Comands/KeyboardManager";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

const Home = () => {
    return (
        <>
            <main className="mx-auto p-5 w-full lg:p-16">
                <Hero />
                <About />
                <Experience />
                {/* <Education /> */}
                <Projects />
                <Skills />
            </main>
            <KeyboardManager />
        </>
    );
};

export default Home;
