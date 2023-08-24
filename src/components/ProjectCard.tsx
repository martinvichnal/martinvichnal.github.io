import { Col } from "react-bootstrap"

type ProjectCardProps = {
    title: string,
    description: string,
    imgUrl: string,
}

export const ProjectCard = (props: ProjectCardProps) => {
    return (
        <Col sm={6} md={6}>
            <div className="proj-imgbx">
                <img src={props.imgUrl} />
                <div className="proj-txtx">
                    <h4>{props.title}</h4>
                    <span>{props.description}</span>
                </div>
            </div>
        </Col>
    )
}