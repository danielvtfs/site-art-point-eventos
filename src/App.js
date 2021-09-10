import React from 'react';
import './styles.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from './components/Footer';
import Cursos from './pages/Cursos/Cursos';
import Contato from './pages/Contato/Contato';
import Copa2014 from './pages/Copa2014/Copa2014';
import CorridaDisney from './pages/CorridaDisney/CorridaDisney';
import SaibaMais from './pages/SaibaMais/SaibaMais';
import Eventos from './pages/Eventos/Eventos';
import Transpetro from './pages/Transpetro/Transpetro';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/cursos" component={Cursos} />
        <Route path="/contato" component={Contato} />
        <Route path="/copa2014" component={Copa2014} />
        <Route path="/eventos" component={Eventos} />
        <Route path="/corridaDisney" component={CorridaDisney} />
        <Route path="/saibaMais" component={SaibaMais} />
        <Route path="/transpetro" component={Transpetro} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
