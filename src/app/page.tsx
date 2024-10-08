import HeroSection from "@/app/sections/HeroSection";
import ProjectSection from "@/app/sections/ProjectSection";
import HackathonSection from "@/app/sections/HackathonSection";
import GameSection from "@/app/sections/GameSection";
import ContactSection from "@/app/sections/ContactSection";
import NavbarSection from "@/app/sections/NavbarSection";

export default function Home() {
    return (
        <div className="">
            <NavbarSection />

            <main className="relative z-20 bg-white">
                <div className="flex flex-col w-full max-w-7xl m-auto">
                    <HeroSection />
                    <ProjectSection />
                    <HackathonSection />
                    <GameSection />
                </div>
            </main>

            <div className="sticky bottom-0 z-10 max-w-7xl m-auto">
                <ContactSection />

                <footer className="p-5 text-center border-x-4 border-slate-50">
                    <p className="text-xs text-gray-500">
                        © 2024 Julia Hoang. All rights reserved.
                    </p>
                </footer>
            </div>

            <div id="contact"></div>
        </div>
    );
}
