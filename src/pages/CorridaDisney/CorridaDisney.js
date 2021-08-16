import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/Corrida Disney Channel/img1.jpg';
import img2 from '../../img/Corrida Disney Channel/img2.jpg';
import img3 from '../../img/Corrida Disney Channel/img3.jpg';
import img4 from '../../img/Corrida Disney Channel/img4.jpg';
import img5 from '../../img/Corrida Disney Channel/img5.jpg';
import img6 from '../../img/Corrida Disney Channel/img6.jpg';

function CorridaDisney() {
  return (
    <Carousel className="container" fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="Primeiro slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Segundo slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Terceiro slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img4} alt="Quarto slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img5} alt="Quarto slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img6} alt="Quarto slide" />
      </Carousel.Item>
    </Carousel>
  );
}
export default CorridaDisney;
