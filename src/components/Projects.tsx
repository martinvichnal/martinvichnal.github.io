import { Col, Container, Nav, Row, Tab } from "react-bootstrap"

import project1Img from "../assets/img/project-img1.png"
import project2Img from "../assets/img/project-img2.png"
import project3Img from "../assets/img/project-img3.png"
import colorSharp2 from "../assets/img/color-sharp2.png"

import { ProjectCard } from "./ProjectCard"

export const Projects = () => {

    const projects = [
        {
            title: "Project 1",
            description: "Project 1 description",
            imgUrl: project1Img,
        },
        {
            title: "Project 2",
            description: "Project 2 description",
            imgUrl: project2Img,
        },
        {
            title: "Project 3",
            description: "Project 3 description",
            imgUrl: project3Img,
        },
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <h2>Projects</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        title={project.title}
                                                        description={project.description}
                                                        imgUrl={project.imgUrl} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Lore Ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Lore Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section >
    )
}