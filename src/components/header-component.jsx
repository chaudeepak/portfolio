import { Container, Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';?
import 'react-tabs/style/react-tabs.css';
import BrandComponent from './brand-component';
import "../css/style.css";
// import { AnchorLink } from 'react-anchor-link-smooth-scroll';
import AnchorLink from 'react-anchor-link-smooth-scroll'

const HeaderComponent = () => {
    return(<>
        <Navbar expand="lg" className="bg-body-tertiary" bg="light" data-bs-theme="light" sticky="top">
            <Container>
                <BrandComponent/>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" style={{float: 'right'}}>
                <Nav className="me-auto">
                    <AnchorLink href='#home' className='nav-link'>Home</AnchorLink>
                    <AnchorLink href='#education' className='nav-link'>Education</AnchorLink>
                    <AnchorLink href='#skill' className='nav-link'>Skill</AnchorLink>
                    <AnchorLink href='#experience' className='nav-link'>Experience</AnchorLink>
                    <AnchorLink href='#profile' className='nav-link'>Profile</AnchorLink>
                    <AnchorLink href='#contact' className='nav-link'>Contact</AnchorLink>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>)
}
export default HeaderComponent;