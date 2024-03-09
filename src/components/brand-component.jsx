import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import "../css/style.css";

const BrandComponent = () => {
    return(<>
        <Container>
            <NavLink to="/" style={{textDecoration: 'none'}}><h3>Deepak Chaudhary</h3></NavLink>
        </Container>
    </>)
}
export default BrandComponent;