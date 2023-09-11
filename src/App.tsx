// Color palettes:
// https://huemint.com/brand-3/#palette=f8f7f2-37373c-db4415-787b7d - Dark mode: https://huemint.com/brand-3/#palette=29292b-fdfdfd-e59146-7c8588

// huemint.com/brand-intersection/#palette=fdfeff-4b3a37-f65f31-f9d68d
// https://huemint.com/brand-3/#palette=fcfcfc-21272e-1156ef-d18e0b - Dark mode: https://huemint.com/brand-3/#palette=0e0e1f-f1c4c4-d63527-594b5a
// https://huemint.com/brand-3/#palette=fffdff-2a1c17-58493c-dea83b - Dark mode: https://huemint.com/brand-3/#palette=2b2a2d-fdfdfb-e6a53c-738379
// https://huemint.com/brand-3/#palette=2b2b2a-d7c7ae-be9267-987745 - Elegand
// https://huemint.com/back-gradient-4/#palette=fef6f8-d6972d-db6a1a-b1380f-653825
// www.colorhexa.com/2b2b2a

import Navbar from "./sections/Navbar"
import Hero from "./sections/Hero"
import Aboutme from "./sections/Aboutme"
import Projects from "./sections/Projects"
import FooterMain from "./sections/FooterMain"

function App() {
    return (
        <main className="">
            <section id="navbar">
                <Navbar />
            </section>
            <section id="home">
                <Hero />
            </section>
            <section id="projects" className="padding">
                <Projects />
            </section>
            <section id="aboutme" className="padding">
                <Aboutme />
            </section>
            <FooterMain />
        </main>
    )
}

export default App

const ThemeTester = () => {
    return (
        <div className="pt-20">
            <div className="bg-bkg h-10">bg-bkg</div>
            <div className="bg-cBkg h-10">bg-cBkg</div>
            <div className="bg-content h-10">bg-content</div>
            <div className="bg-cContent h-10">bg-cContent</div>
            <div className="bg-accent-1 h-10">bg-accent-1</div>
            <div className="bg-accent-2 h-10">bg-accent-2</div>
            <div className="bg-cAccent-1 h-10">bg-cAccent-1</div>
            <div className="bg-cAccent-2 h-10">bg-cAccent-2</div>
        </div>
    )
}
