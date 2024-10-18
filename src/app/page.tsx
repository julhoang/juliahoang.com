import HeroSection from "@/app/sections/HeroSection";
import ProjectSection from "@/app/sections/ProjectSection";
import HackathonSection from "@/app/sections/HackathonSection";
import GameSection from "@/app/sections/GameSection";
import GraphicsSection from "@/app/sections/GraphicsSection";
import ContactSection from "@/app/sections/ContactSection";
import NavbarSection from "@/app/sections/NavbarSection";

export default function Home() {
    return (
        <div className="bg-white dark:bg-slate-900">
            <NavbarSection />

            <main>
                <div className="flex flex-col w-full max-w-7xl m-auto">
                    <HeroSection />
                    <ProjectSection />
                    <HackathonSection />
                    <GraphicsSection />
                    <GameSection />
                    <ContactSection />

                    <footer className="p-5 text-center border-x-4 border-slate-50 dark:border-slate-500 dark:border-y-4">
                        <p className="text-xs text-gray-500">
                            © 2024 Julia Hoang. All rights reserved.
                        </p>
                    </footer>
                </div>
            </main>
        </div>
    );
}
