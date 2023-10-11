import { Row, Col, Image, Container } from "react-bootstrap";
// import "./Heading.css";
import image1 from "../assets/images/000015950035.jpg";

const Heading = () => {
  return (
    <div>
      <Container >
        <Row style={{ padding: "0.5rem" }}>
          <Col md={8}>
            <Image
              src={image1}
              alt="Image1"
              style={{
                height: "500px",
                width: "100%",
                objectFit: "cover",
                objectPosition: "0% 80%",
              }}
            />
          </Col>
          <Col
            md={4}
            style={{
              wordSpacing: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row style={{color:'var(--text-dark)'}}>
              <h2>about me</h2>
              <p>
                Hey, my name is Verrel Al Syoumi and I use 'boyzwhocried' as my
                nickname across social medias. I’m a computer science student
                from Indonesia, who have growing interest in UX/UI designing &
                front-end web development. I’m also passionate about music,
                photgraphy, arts and technologies and I’m always curious to
                learn more when it comes to new technologies and creative
                coding.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Heading;
