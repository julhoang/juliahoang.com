import Image from "next/image";

interface Game {
    media: string;
    gameName: string;
    url: string;
}

const games: Game[] = [
    {
        media: "pong.png",
        gameName: "Pong",
        url: "https://julhoang.github.io/exercise9/",
    },
    {
        media: "horse.png",
        gameName: "Albert and Simon's Adventure",
        url: "https://julhoang.github.io/exercise10/",
    },
    {
        media: "tic-tac-toe.png",
        gameName: "Tic Tac Toe",
        url: "https://julhoang.github.io/exercise8/",
    },
];

export default function GameSection() {
    return (
        <div className="bg-orange-50 p-5 sm:p-10 text-left">
            <h2 className="font-bold text-5xl md:text-7xl mb-2 text-orange-700">games.</h2>
            <p className="text-lg md:text-xl md:w-1/2 mb-4 md:mb-8">
                I first learned to code back in grade 11 by making web games. Were they
                groundbreaking? Not even close. But hey, we all have to start somewhere, right?
                Right? 😅
            </p>

            <div className="grid grid-rows sm:grid-cols-2 md:grid-cols-3 gap-5">
                {games.map((game) => (
                    <div
                        key={game.gameName}
                        className="w-full text-center"
                    >
                        <Image
                            src={`/${game.media}`}
                            width={500}
                            height={300}
                            alt={game.gameName}
                            className="rounded-lg mb-5"
                        />

                        <a
                            href={game.url}
                            type="button"
                            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                        >
                            Play {game.gameName}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
