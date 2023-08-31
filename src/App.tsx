import "./App.css"

import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import FooterMain from "./components/FooterMain"
import Projects, { projectObj, allTags } from "./components/Projects"
import { useState } from "react"
import Aboutme from "./components/Aboutme"

let filterTags = allTags

function App() {
    // This will be used for the select tag filter. Will have to search for multy select.
    const [selectedTags, setSelectedTags] = useState<string>("All")
    const handleTagChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedTags(event.target.value)
    }

    return (
        <>
            <Navbar />
            <section className="">
                <Hero />
            </section>
            <section className="">
                <div className="p-5">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Select what type of projects do you want to filter
                    </label>
                    <select
                        id="countries"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                        <option value="All" selected>
                            All
                        </option>
                        {allTags.map((tag) => (
                            <option value={tag}>{tag}</option>
                        ))}
                    </select>
                </div>
                <div className="grid gap-4 grid-cols-3">
                    {projectObj
                        .filter((project) =>
                            project.tags.some((tag) => filterTags.includes(tag))
                        )
                        .map((filteredProjects) => (
                            <Projects
                                key={filteredProjects.title}
                                title={filteredProjects.title}
                                description={filteredProjects.description}
                                image={filteredProjects.image}
                                tags={filteredProjects.tags}
                                webSource={filteredProjects.webSource}
                                gitSource={filteredProjects.gitSource}
                            />
                        ))}
                </div>
            </section>
            <section className="">
                <Aboutme />
            </section>
            <FooterMain />
        </>
    )
}

export default App
