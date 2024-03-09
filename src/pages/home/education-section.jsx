import { Container, Col, Row } from "react-bootstrap";
import { MDBContainer } from "mdb-react-ui-kit";
import "./education-section.css"

const EducationSection = () => {
    return(<>
        <Container id="education">
            <Row>
                <Col><h3>Education</h3></Col>
            </Row>
            <Row>
                <Col>
                    <MDBContainer className="py-5">
                        <ul className="timeline">
                            <li className="timeline-item mb-5">
                            <h5 className="fw-bold">Bachelors of Engineering in Computer Engineering</h5>
                            <p className="text-muted mb-2 fw-bold">2022 A.D</p>
                            <p className="text-muted">
                                Nepal College of Information Technology <br/>
                                Balkumari, Lalitpur, Nepal
                            </p>
                            </li>
                            <li className="timeline-item mb-5">
                            <h5 className="fw-bold">Intermediate in Science</h5>
                            <p className="text-muted mb-2 fw-bold">2014 A.D</p>
                            <p className="text-muted">
                                Kathmandu Model Higher Secondary School<br/>
                                Bagbazar, Kathmandu, Nepal
                            </p>
                            </li>
                            <li className="timeline-item mb-5">
                            <h5 className="fw-bold">School Leaving Certificate</h5>
                            <p className="text-muted mb-2 fw-bold">2068 B.S</p>
                            <p className="text-muted">
                                Janjyoti Secondary Boarding School <br/>
                                Gulariya, Bardiya, Nepal
                            </p>
                            </li>
                        </ul>
                    </MDBContainer>
                </Col>
            </Row>
        </Container>
    </>)
}
export default EducationSection;