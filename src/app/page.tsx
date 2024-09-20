import HeroSection from "@/app/sections/HeroSection";
import ProjectSection from "@/app/sections/ProjectSection";
import HackathonSection from "@/app/sections/HackathonSection";
import GameSection from "@/app/sections/GameSection";

export default function Home() {
    return (
        <main className="flex w-full text-center justify-center">
            <div className="flex flex-col w-full max-w-7xl">
                <HeroSection />
                <ProjectSection />
                <HackathonSection />
                <GameSection />
            </div>
        </main>
    );
}
