import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider";
import Preloader from "./components/Preloader";
import ScrollProgress from "./components/ScrollProgress";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ProjectDetail from "./components/ProjectDetail";

function HomePage() {
    return (
        <>
            <Preloader />
            <ScrollProgress />
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
            <BackToTop />
        </>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/project/:id" element={<ProjectDetail />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}