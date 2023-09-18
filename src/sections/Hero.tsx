import { useEffect, useState } from "react"

const Hero = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const [index, setIndex] = useState(1)
    const toRotate = [
        "an Electrical Engineer",
        "a Software Engineer",
        "an IoT creator",
    ]
    const period = 2000

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setIndex((prevIndex) => prevIndex - 1)
            setDelta(period)
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setIndex(1)
            setDelta(500)
        } else {
            setIndex((prevIndex) => prevIndex + 1)
        }
    }

    return (
        // <div className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 text-content">
        <div className="pl-60 w-screen h-screen bg-bkg text-content relative flex flex-col items-start justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-content">
                Hello, there.
            </h1>
            <p className="py-2 text-4xl md:text-5xl lg:text-6xl font-bold text-accent-1">
                I'm Martin Vichnál
            </p>
            <p className="py-4 text-2xl md:text-3xl lg:text-4xl text-content">
                I'm {text}
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl text-content">
                Wellcome to my portfolio
            </p>
        </div>
    )
}

export default Hero
