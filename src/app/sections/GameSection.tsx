import ImageRounded from "../components/ImageRounded";

interface Game {
    media: string;
    gameName: string;
    url: string;
}

export default function GameSection() {
    return (
        <section className="bg-orange-50 p-5 sm:p-10 text-left bg-opacity-50 dark:border-4 dark:text-gray-300 dark:border-slate-500 dark:bg-transparent">
            {/*-------- Section header --------*/}
            <h2 className="font-bold text-5xl md:text-7xl mb-2 text-orange-700">games.</h2>
            <p className="text-lg md:text-xl md:w-1/2 mb-4 md:mb-8">
                I first learned to code back in grade 11 by making web games. Were they
                groundbreaking? Not even close. But hey, we all have to start somewhere, right?
                Right? 😅
            </p>

            <p className="md:hidden text-gray-700 text-sm pb-5 dark:text-gray-400">
                *Sorry, these games are not really mobile-friendly. For the best experience, please
                view them on a desktop or laptop.
            </p>

            {/*------- Game Grid -------*/}
            <div className="grid grid-rows sm:grid-cols-2 md:grid-cols-3 gap-5">
                {games.map((game) => (
                    <div
                        key={game.gameName}
                        className="w-full text-center"
                    >
                        <a href={game.url}>
                            <ImageRounded
                                src={game.media}
                                alt={game.gameName}
                                small={true}
                            />

                            <button className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                                Play {game.gameName}
                            </button>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

const games: Game[] = [
    {
        media: "/games/pong.png",
        gameName: "Pong",
        url: "https://julhoang.github.io/exercise9/",
    },
    {
        media: "/games/horse.png",
        gameName: "Albert and Simon's Adventure",
        url: "https://julhoang.github.io/exercise10/",
    },
    {
        media: "/games/tic-tac-toe.png",
        gameName: "Tic Tac Toe",
        url: "https://julhoang.github.io/exercise8/",
    },
];
