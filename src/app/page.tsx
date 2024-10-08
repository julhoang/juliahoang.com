import HeroSection from "@/app/sections/HeroSection";
import ProjectSection from "@/app/sections/ProjectSection";
import HackathonSection from "@/app/sections/HackathonSection";
import GameSection from "@/app/sections/GameSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
    return (
        <div>
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
            </div>
        </div>
    );
}
