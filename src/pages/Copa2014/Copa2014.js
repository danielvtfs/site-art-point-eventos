import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/Copa do Mundo 2014/img1.jpg';
import img2 from '../../img/Copa do Mundo 2014/img2.jpg';
import img3 from '../../img/Copa do Mundo 2014/img3.jpg';
import img4 from '../../img/Copa do Mundo 2014/img4.jpg';
import img5 from '../../img/Copa do Mundo 2014/img5.jpg';
import img6 from '../../img/Copa do Mundo 2014/img6.jpg';
import img7 from '../../img/Copa do Mundo 2014/img7.jpg';
import img8 from '../../img/Copa do Mundo 2014/img8.jpg';
import img9 from '../../img/Copa do Mundo 2014/img9.jpg';
import img10 from '../../img/Copa do Mundo 2014/img10.jpg';
import img11 from '../../img/Copa do Mundo 2014/img11.jpg';
import img12 from '../../img/Copa do Mundo 2014/img12.jpg';
import Whatsapp from '../../components/WhatsApp/Whatsapp';
import './copa2014.css';
function Copa2014() {
  return (
    <div>
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
        <Carousel.Item>
          <img className="d-block w-100" src={img7} alt="Quarto slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img8} alt="Quarto slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img9} alt="Quarto slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img10} alt="Quarto slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img11} alt="Quarto slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img12} alt="Quarto slide" />
        </Carousel.Item>
      </Carousel>
      <Whatsapp />
    </div>
  );
}
export default Copa2014;
