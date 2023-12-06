import { Card, Container, Row, Col, Image } from "react-bootstrap";
import dilanImage from "../assets/images/Dilan1.jpg";
const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="superhero">
            <Card className="text-white movieImage">
              <Image src={dilanImage} alt="DILAN 1991" className="gambar" />
              <div className="bg-dark">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">DILAN 1991</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={dilanImage} alt="DILAN 1991" className="gambar" />
              <div className="bg-dark">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">DILAN 1991</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={dilanImage} alt="DILAN 1991" className="gambar" />
              <div className="bg-dark">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">DILAN 1991</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={dilanImage} alt="DILAN 1991" className="gambar" />
              <div className="bg-dark">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">DILAN 1991</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={dilanImage} alt="DILAN 1991" className="gambar" />
              <div className="bg-dark">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">DILAN 1991</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="text-white movieImage">
              <Image src={dilanImage} alt="DILAN 1991" className="gambar" />
              <div className="bg-dark">
                <div className="p-2 m-2">
                  <Card.Title className="text-center">DILAN 1991</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Superhero;
