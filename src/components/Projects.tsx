import { Card } from 'flowbite-react';
import Picture from '../assets/arch.jpeg'

export const Projects = () => {
    return (
        <div>
            <Card
                imgAlt="Meaningful alt text for an image that is not purely decorative"
                imgSrc={Picture}
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <p>
                        Noteworthy technology acquisitions 2021
                    </p>
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <p>
                        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                    </p>
                </p>
            </Card>
        </div>
    )
}