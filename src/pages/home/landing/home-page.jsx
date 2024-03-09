import { Container, Row, Col, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import EducationSection from "../education-section";
import SkillsPage from "../skills-page";
import ExperienceComponent from "../experience-component";
import ProfileComponent from "../profile-component";
import ContactComponent from "../Contact-component";
import Intro from "../intro-component";
import About from "../about-component";

const Homepage = () => {
    return(<>
        <Intro />

        <About />

        <EducationSection />

        <SkillsPage />

        <ExperienceComponent />

        <ProfileComponent />

        <ContactComponent />
    </>)
}
export default Homepage;