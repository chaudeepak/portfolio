import { Container, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DC from "../assets/images/dc.svg"
// import "../css/style.css";

const BrandComponent = () => {
    return(<>
        <Container>
            {/* <NavLink to="/" style={{textDecoration: 'none'}}><h3>Deepak Chaudhary</h3></NavLink> */}
            <NavLink to="/" style={{textDecoration: 'none'}}><Image src={DC} style={{height: '70px'}}></Image></NavLink>
        </Container>
    </>)
}
export default BrandComponent;