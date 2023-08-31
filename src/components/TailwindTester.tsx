import React from "react"

export const TailwindTester = () => {
    const [darkToggle, setDarkToggle] = React.useState(false)
    return (
        <>
            {/* <!-- Begining --> */}
            {/* mt-3: Margin top 3 */}
            <h1 className="text-center text-lg text-blue-400">Hello</h1>
            <div className="w-full h-10 bg-violet-200 rounded-md my-4 p-2 border-2">
                <p className="text-center font-mono font-extrabold text-[20px]">
                    A div
                </p>
            </div>

            {/* <!-- Layout --> */}

            {/* <!-- Fixed --> */}
            <div className=" fixed w-10 h-10 bg-red-300 top-0">Fixed</div>
            {/* <!-- Flex --> */}
            {/* justify-end | center stb: adjus the element to center or the end stb */}
            {/* space-x-6: If there are more elements it spaces out by 6 */}
            {/* justify-between: makes space equally between elements, in this case space is not needed */}
            <div className=" flex justify-between">
                <div className=" w-16 h-16 bg-blue-200 rounded-full">Flex</div>
                <div className=" w-16 h-16 bg-blue-200 rounded-full">Flex</div>
                <div className=" w-16 h-16 bg-blue-200 rounded-full">Flex</div>
            </div>
            {/* <!-- Grid --> */}
            {/* grid-cols-3: divides the space into 3 collums */}
            <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="bg-violet-400 h-12">Grid</div>
                <div className="bg-violet-400 h-12">Grid</div>
                <div className="bg-violet-400 h-12">Grid</div>
                <div className="bg-violet-400 h-12">Grid</div>
                <div className="bg-violet-400 h-12">Grid</div>
            </div>

            {/* <!-- Media queries --> */}
            {/* max-md:block hidden: the text appears if res < 768px */}
            {/* md:block hidden: the text appears if res > 768px */}
            <div className=" max-md:block hidden">
                <p>{`Appearing when device resolution > 768px`}</p>
            </div>

            {/* <!-- Hovers --> */}
            <button
                className="my-2 rounded-lg bg-blue-300 px-4 py-2 
            hover:bg-red-300 
            focus:outline-none focus:ring-blue-800 
            active:bg-red-800"
            >
                Click me
            </button>

            {/* <!-- Element ranks --> */}
            <ul className="my-2 space-y-2">
                <li className="bg-white p-2 first:bg-yellow-600">Item 1</li>
                <li className="bg-white p-2 first:bg-yellow-600 odd:bg-blue-200 even:bg-green-200">
                    Item 2
                </li>
                <li className="bg-white p-2 first:bg-yellow-600 odd:bg-blue-200 even:bg-green-200">
                    Item 3
                </li>
                <li className="bg-white p-2 first:bg-yellow-600 odd:bg-blue-200 even:bg-green-200">
                    Item 4
                </li>
                <li className="bg-white p-2 first:bg-yellow-600 odd:bg-blue-200 even:bg-green-200">
                    Item 5
                </li>
            </ul>

            {/* <!-- Dark mode --> */}
            {/* <div className={`h-screen w-full flex items-center justify-center bg-gray-300 flex-col ${darkToggle && 'dark'}
             dark:bg-gray-600`}> */}

            {/* <div className="bg-gray-100 dark:bg-gray-700">
                <h1 className="text-black dark:text-gray-200">
                GeeksforGeeks
                </h1>
            </div> */}
            <div className="m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5">
                <h3 className="text-base font-medium tracking-tight text-slate-900">
                    This is a text element
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                    This is an even longer p tag element
                </p>

                <button
                    id="toggleDark"
                    className="text-blue-900 px-2 py-2 text-sm font-medium bg-blue-100 rounded-md"
                    onClick={() => setDarkToggle(!darkToggle)}
                >
                    Toggle dark mode
                </button>
                {/* </div > */}
            </div>

            {/* <!-- Custom size --> */}
            <p className=" text-2xl text-[#973F29] bg-[#00000] p-[16px]">
                Chestnut color
            </p>
            {/* Added a custon color in the tailwind config file */}
            {/* 
            theme: {
                extend: {
                    colors: {
                        chestnut: "#973F29",
                    },
                },
            }, 
            */}
            {/* <p className=" text-2xl text-chestnut bg-[#00000] p-[16px]">Chestnut color</p> */}

            {/* Adding custom component in config */}
            <div className="card"></div>
            {/* 
            @layer components {
                .card {
                    @apply m-10 rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-slate-900/5
                }
            } 
            */}
        </>
    )
}
