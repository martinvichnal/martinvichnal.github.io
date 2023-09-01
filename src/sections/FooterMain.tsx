// Date: 09/08/21
// Note: React Functional Component - Footer Main

export default function FooterMain() {
    return (
        <footer className="bg-bkg">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a
                            href="https://martinvichnal.com/"
                            className="flex items-center"
                        >
                            <span className="self-center text-2xl font-semibold whitespace-nowrap text-content">
                                Portfolio by Martin Vichnal
                            </span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold uppercase text-content">
                                Follow me
                            </h2>
                            <ul className="text-content font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/martinvichnal"
                                        target="_blank"
                                        className="hover:underline "
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/vichnal.martin/"
                                        target="_blank"
                                        className="hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-content uppercase">
                                Projects
                            </h2>
                            <ul className="text-content font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://martinvichnal.com/pomodoro"
                                        target="_blank"
                                        className="hover:underline "
                                    >
                                        Pomodoro
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://martinvichnal.com/background-sounds"
                                        target="_blank"
                                        className="hover:underline"
                                    >
                                        Background sounds
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-accent-2 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm sm:text-center text-content">
                        © 2023{" "}
                        <a
                            href="https://martinvichnal.com/"
                            className="hover:underline"
                        >
                            Martin Vichnal
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    )
}
