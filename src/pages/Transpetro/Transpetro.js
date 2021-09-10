import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../img/Transpetro/img1.jpg';
import img2 from '../../img/Transpetro/img2.jpg';
import img3 from '../../img/Transpetro/img3.jpg';
import img4 from '../../img/Transpetro/img4.jpg';

import Whatsapp from '../../components/WhatsApp/Whatsapp';
import './transpetro.css';
function Transpetro() {
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
      </Carousel>
      <Whatsapp />
    </div>
  );
}
export default Transpetro;
