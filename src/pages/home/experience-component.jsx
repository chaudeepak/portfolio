import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import "./experience-component.css";
import { Col, Container, Row } from "react-bootstrap";

const ExperienceComponent = () => {
    return(<>
        <Container className="my-5" id="experience">
            <Row>
                <Col>
                    <h3>Training and Experience</h3>
                </Col>
            </Row>
        </Container>
        <MDBContainer className="">
            
            <MDBRow>
                <MDBCol lg="12">
                <div className="horizontal-timeline">
                    <MDBTypography listInLine className="items">
                    <li className="items-list">
                        <div className="px-4">
                        <div className="event-date badge bg-info">2019 A.D</div>
                        <h5 className="pt-2">CCNA and Security, Training</h5>
                        <p className="text-muted">
                            Neosphere <br/>
                            New Baneshwor, Kathmandu, Nepal
                        </p>
                        <div>
                            <MDBBtn href="#!" size="sm">
                            Read more
                            </MDBBtn>
                        </div>
                        </div>
                    </li>
                    <li className="items-list">
                        <div className="px-4">
                        <div className="event-date badge bg-success">5 June</div>
                        <h5 className="pt-2">Event Two</h5>
                        <p className="text-muted">
                            Everyone realizes why a new common language one could refuse
                            translators.
                        </p>
                        <div>
                            <MDBBtn href="#!" size="sm">
                            Read more
                            </MDBBtn>
                        </div>
                        </div>
                    </li>
                    <li className="items-list">
                        <div className="px-4">
                        <div className="event-date badge bg-danger">7 June</div>
                        <h5 className="pt-2">Event Three</h5>
                        <p className="text-muted">
                            If several languages coalesce the grammar of the resulting
                            simple and regular
                        </p>
                        <div>
                            <MDBBtn href="#!" size="sm">
                            Read more
                            </MDBBtn>
                        </div>
                        </div>
                    </li>
                    <li className="items-list">
                        <div className="px-4">
                        <div className="event-date badge bg-warning">8 June</div>
                        <h5 className="pt-2">Event Four</h5>
                        <p className="text-muted">
                            Languages only differ in their pronunciation and their most
                            common words.
                        </p>
                        <div>
                            <MDBBtn href="#!" size="sm">
                            Read more
                            </MDBBtn>
                        </div>
                        </div>
                    </li>
                    </MDBTypography>
                </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>)
}
export default ExperienceComponent;