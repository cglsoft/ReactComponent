import React, {Component} from 'react';
import Box from './components/Box.js';
import { Container, Row, Col } from 'reactstrap';

import logo from './logo.svg';
import './App.css';



var lista1 = [
                {id :1,title: '#Dica 1 – Usuários não sabem o que querem'}, 
                {id :2,title: '#Dica 2 – Usuários não sabem explicar direito o que querem'}, 
                {id :3,title: '#Dica 3 – Analista pensa em “modo cartesiano”'},
                {id :4,title: '#Dica 4 – Analista pensa em “modo cartesiano”'},
                {id :5,title: '#Dica 5 – Analista sempre acha que “já entendeu”'}

              ];
var title1 = 'Rio de Janeiro';

var lista2 = [
  {id : 1, title : 'Em Brasília', avatar : 'https://hp.imguol.com.br/c/home/9f/2016/12/28/jornalista-carlos-chagas-1482927992799_100x100.jpg'},
  {id : 2, title : 'Caminho errado', avatar : 'https://hp.imguol.com.br/c/home/16/2017/04/19/chuva-de-dinheiro-fortuna-milionario-dinheiro-caindo-do-ceu-loteria-megasena-1492637910779_100x100.jpg'},
  {id : 3, title : 'Atos de ódio', avatar : 'https://hp.imguol.com.br/c/home/c5/2017/04/26/hiko---csgo-1493234817476_100x100.jpg'},
  {id : 4, title : 'Entrou no Guinness', avatar : 'https://hp.imguol.com.br/c/home/71/2017/04/26/mario---certificado-do-livro-dos-recordes-1493238117144_100x100.jpg'},

];

var title2 = 'UOL informações';

class App extends Component {
  
  render() {
    return (
      <Container>
        <row>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2>Welcome to React</h2>
          </div>
        </row>
        <row>

        <Row>
          <Col xs="6"><Box title={title1} lista={lista1} /></Col>
          <row>
           <Col xs="auto"><Box title={title2} lista={lista2} /></Col>
          </row>
        </Row>


        
        </row>           
      </Container>
    );
  }
}

export default App;