import { Col, Container, ProgressBar, Row } from "react-bootstrap";
import "./skills-style.css";

const SkillsPage = () => {
    const now = 40;
    const textStyle = {
        color: '#000 !important',
    }
    return(<>
        <Container id="skill">
            <Row>
                <Col>
                    <h3>Skills</h3>
                </Col>
            </Row>
            <Row>
                <Col className="my-3">
                    <p>Computer Networks</p>
                    <ProgressBar now={now} label={`${now}%`} />
                </Col>
            </Row>
            <Row>
                <Col className="my-3">
                    <p>Javascript</p>
                    <ProgressBar now={now} label={`${70}%`} visuallyHidden />
                </Col>
            </Row>
            <Row>
                <Col className="my-3">
                    <p>HTML</p>
                    <ProgressBar now={now} label={`${70}%`} visuallyHidden />
                </Col>
            </Row>
            <Row>
                <Col className="my-3">
                    <p>CSS</p>
                    <ProgressBar now={now} label={`${10}%`} visuallyHidden />
                </Col>
            </Row>
        </Container>
    </>)
}
export default SkillsPage;