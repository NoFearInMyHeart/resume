import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import About from "./_components/about";
import Experience from "./_components/experience";
import Tech from "./_components/tech";
import Projects from "./_components/projects";
import Footer from "./_components/footer";

const MainPage = () => {
    return (
        <>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Projects />
            <Footer />
        </>
    );
};

export default MainPage;
