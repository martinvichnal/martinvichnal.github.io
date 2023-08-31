import pomodoroImage from "../assets/PomodoroCover.png"
import portfolioImage from "../assets/feels.png"
import smartLampImage from "../assets/door.jpg"

// Projects props
type ProjectsProps = {
    title: string
    description: string
    image: string
    tags: string[]
    webSource: string
    gitSource: string
}

// Exporting all tags for the filter
export const allTags = ["React", "WebDev", "ESP32", "C++", "IoT"]

// Project object
export const projectObj = [
    {
        title: "Pomodoro tracker",
        description:
            "This is my first sort of complex React project. This page is based on the pomodoro technique which is an excellent way for time management. It was invented in the late 1980s by Francesco Cirillo.",
        image: pomodoroImage,
        tags: ["React", "WebDev"],
        webSource: "https://www.martinvichnal.com/pomodoro/",
        gitSource: "https://github.com/martinvichnal/pomodoro",
    },
    {
        title: "Portfolio",
        description: "This is my personal portfolio.",
        image: portfolioImage,
        tags: ["React", "WebDev"],
        webSource: "https://www.martinvichnal.com/",
        gitSource: "https://github.com/martinvichnal/",
    },
    {
        title: "IoT Smart Lamp",
        description:
            "Smart lamp built with ESP32 and WS2812B LEDs. It is controlled by a web interface.",
        image: smartLampImage,
        tags: ["ESP32", "C++", "WebDev", "IoT"],
        webSource: "https://github.com/martinvichnal/ESP-IoT-Lamp",
        gitSource: "https://github.com/martinvichnal/ESP-IoT-Lamp",
    },
]

const Projects = ({
    title,
    description,
    image,
    tags,
    webSource,
    gitSource,
}: ProjectsProps) => {
    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href={webSource} target="_blank">
                    <img
                        className="rounded-t-lg object-cover h-48 w-96"
                        src={image}
                        alt="Project image"
                    />
                </a>
                <div className="p-5">
                    <a href={webSource} target="_blank">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {title}
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {description}
                    </p>
                    <a
                        href={webSource}
                        target="_blank"
                        className="mr-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Visit site
                        <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                    <a
                        href={gitSource}
                        target="_blank"
                        className="mx-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Visit GitHub
                        <svg
                            className="w-3.5 h-3.5 ml-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
                <div className="px-5 pb-5">
                    <CreateTags tags={tags} />
                </div>
            </div>
        </div>
    )
}

export default Projects

// Creating tags with different colors in the projects section.
// Colors: React: blue, WebDev: red, ESP32: green, C++: yellow, IoT: purple
const CreateTags = ({ tags }: { tags: string[] }) => {
    return (
        <div>
            {tags.map((tag) => {
                let tagClassName = ""

                switch (tag) {
                    case "React":
                        tagClassName =
                            "bg-blue-100 text-blue-800 text-xs dark:bg-blue-900 dark:text-blue-300"
                        break
                    case "WebDev":
                        tagClassName =
                            "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        break
                    case "ESP32":
                        tagClassName =
                            "bg-green-100 text-green-800 rounded dark:bg-green-900 dark:text-green-300"
                        break
                    case "C++":
                        tagClassName =
                            "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        break
                    case "IoT":
                        tagClassName =
                            "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                        break
                    default:
                        tagClassName =
                            "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
                        break
                }

                return (
                    <span
                        key={tag}
                        className={`text-xs font-medium mt-4 px-2.5 py-0.5 mx-0.5 rounded ${tagClassName}`}
                    >
                        {tag}
                    </span>
                )
            })}
        </div>
    )
}
