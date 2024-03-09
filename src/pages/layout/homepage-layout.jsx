import FooterComponent from "../../components/footer-component";
import HeaderComponent from "../../components/header-component";
import { Outlet } from "react-router-dom";
import Bg from "../../assets/images/bg1.png";
import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Scrollbars from "rc-scrollbars";
import ScrollToTop from "react-scroll-to-top";

const HomepageLayout = () => {
    const bg = {
        backgroundImage: `url(${Bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundAttachment: 'fixed',
        height: '100%'
    }
    return(<Fragment>
        {/* <Scrollbars universal> */}
        <Container style={bg} fluid>
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
        </Container>
        <ScrollToTop smooth />
        {/* </Scrollbars> */}
    </Fragment>)
}
export default HomepageLayout;