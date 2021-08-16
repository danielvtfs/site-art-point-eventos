import Button from 'react-bootstrap/Button';
import './styles.css';
function Home() {
  return (
    <div className="container-home">
      <h1>Aqui você encontra</h1>
      <h2>Sonorização, Iluminação e Cenografia</h2>
      <Button className="botao" href="/saibaMais">
        Saiba mais
      </Button>
    </div>
  );
}
export default Home;
