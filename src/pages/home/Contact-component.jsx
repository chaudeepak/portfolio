import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";

const ContactComponent = () => {
    const textStyle = {
        textDecoration: 'none',
        textWeight: 'bolder',
        color: '#000'
    };

    return(<>
        <Container className="my-4" id="contact">
            <Row>
                <Col><NavLink to='https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRqgkGQplZfDZRNZRJxlWjLJhsgcTbPqmrkvStGkbdGWfStCHqmHdCkntXJWkQcxlZRxRfG' style={textStyle}>chaudhary.deepak0124@gmail.com <MdEmail style={{color: '#fff'}} /> </NavLink></Col>
                <Col><NavLink to='https://www.facebook.com' style={textStyle}>Deepu <FaSquareFacebook style={{color: '#00f'}}/></NavLink></Col>
                <Col><NavLink style={textStyle}>Deepak Chaudhary <FaLinkedin style={{color: '#0077b5'}}/></NavLink></Col>
            </Row>
        </Container>
    </>)
}
export default ContactComponent;