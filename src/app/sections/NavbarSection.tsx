export default function NavbarSection() {
    return (
        <nav
            className="items-center w-full z-30 fixed top-0"
            style={{ transition: "top 0.3s" }}
            id="navbar"
        >
            <div className="flex border-x-4 border-gray-50 backdrop-blur m-auto max-w-7xl px-5 py-4 justify-between">
                <div className="flex items-center space-x-4">
                    <a
                        href="/"
                        className="text-lg font-bold text-gray-900 dark:text-white"
                    >
                        @juliahoang
                    </a>
                </div>

                <div className="flex-row items-center hidden sm:flex pr-8">
                    <div className="blob green"></div>
                    <p className="font-medium text-sm md:text-md">Available For Work</p>
                </div>

                <a href="#contact">
                    <button className="text-sm text-white bg-gray-700 hover:bg-gray-800 rounded-lg px-5 py-2.5 focus:ring-black focus:outline-none focus:ring-4">
                        Contact
                    </button>
                </a>
            </div>
        </nav>
    );
}
