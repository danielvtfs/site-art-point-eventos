import React from 'react';
import { Button } from 'reactstrap';
import img1 from '../../img/Copa do Mundo 2014/img3.jpg';
import img2 from '../../img/Corrida Disney Channel/img6.jpg';
import img3 from '../../img/Transpetro/img1.jpg';
import Whatsapp from '../../components/WhatsApp/Whatsapp';

import {
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardGroup,
  CardSubtitle,
  CardBody,
} from 'reactstrap';

import './eventos.css';
const Eventos = (props) => {
  return (
    <div className="container-eventos">
      <CardGroup className="group-card">
        <Card className="card">
          <CardImg
            top
            width="100%"
            className="img"
            src={img1}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Copa do Mundo 2014</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button href="/copa2014" className="button" outline color="primary">
              Acessar
            </Button>{' '}
            {/* <Button className="button">Button</Button> */}
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg
            top
            width="100%"
            className="img"
            src={img2}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Corrida Disney Channel</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button
              href="/corridaDisney"
              className="button"
              outline
              color="primary"
            >
              Acessar
            </Button>{' '}
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg
            top
            width="100%"
            className="img"
            src={img3}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Transpetro</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button
              href="/transpetro"
              className="button"
              outline
              color="primary"
            >
              Acessar
            </Button>{' '}
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup className="group-card">
        <Card className="card">
          <CardImg top width="100%" src={img1} alt="Card image cap" />
          <CardBody>
            <CardTitle tag="h5">Copa do Mundo 2014</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
        <Card className="card">
          <CardImg
            top
            width="100%"
            src="/assets/318x180.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            {/* <Button>Button</Button> */}
          </CardBody>
        </Card>
      </CardGroup>
      <Whatsapp />
    </div>
  );
};

export default Eventos;
