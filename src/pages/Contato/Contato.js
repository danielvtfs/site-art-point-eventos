import './contato.css';
import Whatsapp from '../../components/WhatsApp/Whatsapp';

function Contato() {
  return (
    <div className="container">
      <div>
        <p>E-mail: artpointeventos@gmail.com</p>

        <p>WhatsApp: (21)97044-8540 / (21)96481-6512</p>
      </div>
      <Whatsapp />
    </div>
  );
}
export default Contato;
