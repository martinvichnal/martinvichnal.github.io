import { Card } from 'flowbite-react';
import Pomodoro from '../assets/arch.jpeg'

export const Projects = () => {
    return (
        <div>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="https://www.martinvichnal.com/pomodoro/" target="_blank">
                    <img className="rounded-t-lg" src={Pomodoro} alt="" />
                </a>
                <div className="p-5">
                    <a href="https://www.martinvichnal.com/pomodoro/" target="_blank">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Pomodoro tracker
                        </h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        This is my first sort of complex React project. This page is based on the pomodoro technique
                        which is an excellent way for time management. It was invented in the late 1980s by Francesco Cirillo.

                    </p>
                    <a
                        href="https://www.martinvichnal.com/pomodoro/"
                        target="_blank"
                        className="mr-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Visit site
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                    <a
                        href="https://github.com/martinvichnal/pomodoro"
                        target="_blank"
                        className="mx-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Visit GitHub
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
                <div className="px-5 pb-5">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">React</span>
                    <span className="bg-red-100 text-red-800 text-xs font-medium mt-4 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">WebDev</span>
                </div>
            </div>
        </div>

    )
}