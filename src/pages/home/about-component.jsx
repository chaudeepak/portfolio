import { Container, Row, Col } from "react-bootstrap";

const About = () => {
    return(<>
        <Container>
            <Row>
                <Col><h3>About</h3></Col>
            </Row>
            
            <Row>
                <Col sm={12} md={6}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit aperiam reiciendis ducimus earum libero recusandae iure inventore illo doloremque dicta soluta reprehenderit, consequuntur cupiditate, corporis eum asperiores eius corrupti quod!</p>
                </Col>
                <Col sm={12} md={6}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique explicabo id dolorum distinctio, incidunt consequatur quae fugiat dolorem, sed inventore adipisci, fuga vitae rerum numquam veritatis earum et maxime eos.</p>
                </Col>
            </Row>
        </Container>
    </>)
}
export default About;