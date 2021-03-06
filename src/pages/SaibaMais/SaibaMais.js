import './saibaMais.css';
import Whatsapp from '../../components/WhatsApp/Whatsapp';
function SaibaMais() {
  return (
    <div className="container">
      <div>
        <h1 className="titulo">ART POINT EVENTOS</h1>
        <p>Somos a ART POINT EVENTOS.</p>
        <p>Trabalhamos com Projetos de SONORIZAÇÃO, ILUMINAÇÃO e CENOGRAFIA.</p>
        <p>
          Fornecemos toda a estrutura para seu evento: Palcos, Tendas,
          Arquibancadas, Iluminação, Telão de Led, Som, Decoração, Buffet, Box
          Truss e muito mais...
        </p>
      </div>
      <Whatsapp />
    </div>
  );
}
export default SaibaMais;
