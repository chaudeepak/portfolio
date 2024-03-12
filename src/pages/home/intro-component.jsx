import { Container, Row, Col, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Background from "../../assets/images/bg.jpg";
import "./intro-style.css";
import CV from "../../assets/files/CV_Deepak Chaudhary.pdf";

const Intro = () => {
    const bg = {
        backgroundImage: `url(${Background})`,
        height: '530px',
        backgroundSize: 'cover'
    }
    // const p = {
    //     color: '#fff !important',
    //     margin: '10px 0px 10px 0px !important'
    // }
    // const rw = {
    //     marginTop: '65px !important'
    // }
    return(<>
        <Container style={bg} id="home" fluid>
            <Row className="mb-12" style={{textAlign: 'center'}}>
                <Col className="mt-12" style={{marginTop: '12px !important'}}>
                    <p>Hi!!! <br/> I am Deepak Chaudhary</p>
                    <br/>
                    <p>UI/UX Designer</p>
                    
                </Col>
            </Row>
            <Row className="my-60" >
                <Col className="mt-200" style={{textAlign: 'center'}}>
                <a href="../../assets/files/CV_Deepak Chaudhary.pdf" target="_blank"><Button type="button" className="btn btn-info">Click Here</Button></a>
                </Col>
            </Row>
        </Container>
    </>)
}
export default Intro;