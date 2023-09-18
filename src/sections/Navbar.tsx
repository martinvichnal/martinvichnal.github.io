import DarkModeSwitcher from "../components/DarkModeSwitcher"

// This object contains all navbar items.
// Object types:
// title: string
// link: string
// target: string
const navbarObj = [
    {
        title: "Home",
        link: "#home",
        target: "_self",
    },
    {
        title: "Projects",
        link: "#projects",
        target: "_self",
    },
    {
        title: "About Me",
        link: "#aboutme",
        target: "_self",
    },
    {
        title: "Pomodoro",
        link: "/pomodoro",
        target: "_blank",
    },
]

const Navbar = () => {
    return (
        <header>
            {/*<nav className="fixed w-full z-20 top-0 left-0 border-b bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600"> */}
            <nav className="w-full top-0 left-0 bg-bkgC text-contentC">
                <div className="w-full max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <div className="flex md:order-1">
                        <a
                            href="https://www.martinvichnal.com/"
                            className="flex items-center"
                        >
                            <div className="flex flex-col">
                                <span className="self-center text-2xl font-semibold whitespace-nowrap text-accent-1">
                                    Personal Portfolio
                                </span>
                                <span className="text-[10px] font-semibold whitespace-nowrap text-accent-2">
                                    By Martin Vichnál
                                </span>
                            </div>
                        </a>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                            {navbarObj.map((navbar) => (
                                <li key={navbar.title}>
                                    <a
                                        href={navbar.link}
                                        target={navbar.target}
                                        className="block py-2 pl-3 pr-4 md:p-0 hover:text-accent-1"
                                    >
                                        {navbar.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex md:order-2 ">
                        <DarkModeSwitcher />
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar
