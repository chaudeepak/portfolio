import { Navbar } from "react-bootstrap";
import { PiCopyrightThin } from "react-icons/pi";
import "./footer-style.css";

const FooterComponent = () => {

    return(<>
        <Navbar>
            <p className="primary">Copyright <PiCopyrightThin/> Designed by Deepak Chaudhary</p>
        </Navbar>
    </>)
}
export default FooterComponent;