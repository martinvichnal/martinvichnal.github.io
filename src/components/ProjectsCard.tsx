// Projects props
export type ProjectsCardProps = {
    title: string
    description: string
    image: string
    tags: string[]
    webSource: string
    gitSource: string
}

const ProjectsCard = ({
    title,
    description,
    image,
    tags,
    webSource,
    gitSource,
}: ProjectsCardProps) => {
    return (
        <div className="text-content max-w-sm bg-white dark:bg-zinc-900 rounded-lg shadow-2xl">
            <a href={webSource} target="_blank">
                <img
                    className="rounded-t-lg object-cover h-48 w-96"
                    src={image}
                    alt="Project image"
                />
            </a>
            <div className="p-5">
                <a href={webSource} target="_blank">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight">
                        {title}
                    </h5>
                </a>
                <p className="mb-3 font-normal">{description}</p>
                <a
                    href={webSource}
                    target="_blank"
                    className="text-white mr-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                    className="text-white mx-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
    )
}

export default ProjectsCard

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
