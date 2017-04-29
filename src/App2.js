import React, {Component} from 'react';

import logo from './logo.svg';
import './App.css';



var lista1 = [
                {id :1,title: '#Dica 1 – Usuários não sabem o que querem'}, 
                {id :2,title: '#Dica 2 – Usuários não sabem explicar direito o que querem'}, 
                {id :3,title: '#Dica 3 – Analista pensa em “modo cartesiano”'},
                {id :4,title: '#Dica 4 – Analista sempre acha que “já entendeu”'}
              ];
var title1 = 'Rio de Janeiro';

var lista2 = [
  {id : 1, title : 'Em Brasília', avatar : 'https://hp.imguol.com.br/c/home/9f/2016/12/28/jornalista-carlos-chagas-1482927992799_100x100.jpg'},
  {id : 2, title : 'Caminho errado', avatar : 'https://hp.imguol.com.br/c/home/16/2017/04/19/chuva-de-dinheiro-fortuna-milionario-dinheiro-caindo-do-ceu-loteria-megasena-1492637910779_100x100.jpg'},
  {id : 3, title : 'Atos de ódio', avatar : 'https://hp.imguol.com.br/c/home/c5/2017/04/26/hiko---csgo-1493234817476_100x100.jpg'},
  {id : 4, title : 'Entrou no Guinness', avatar : 'https://hp.imguol.com.br/c/home/71/2017/04/26/mario---certificado-do-livro-dos-recordes-1493238117144_100x100.jpg'},

];

var title2 = 'UOL informações';



class UserInfo extends React.Component{
  render(props){   
    return(      
          <li key={this.props.id}>
              <img src={this.props.avatar}  alt={this.props.title}/>
              <p> {this.props.title} </p>            
          </li>
        )   
  }
}

class TrendsTops extends React.Component{
  render(props){
   return( <li key={this.props.id}> {this.props.title}</li>)
  }
}

class Box extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      lista : []
    }
  }

  render() {
    var renderList = (item) =>{

      if(item.avatar){
        return <UserInfo id={item.id} title={item.title} avatar={item.avatar} />        
      } else {
        return <TrendsTops id={item.id} title={item.title} />
      }      
    }

    return (
      <div className="component-box">
        <div className="componenent-box-title">
          <h2>{this.props.title}</h2>
        </div>
        <ul className="component-box-list">
          {this.props.lista.map(renderList)}
        </ul>
      </div>
    )
  }
};

class Box2 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title : '',
      lista : []
    }
  }

  render() {
    var renderList = (item) =>{

      if(item.avatar){
        return(
          <li key={item.id}>
            <img src={item.avatar}  alt={item.title}/>
            <p> {item.title} </p>
          </li>
        )
      } else {
        return <li key={item.id}>{item.title}</li>;
      }      
    }

    return (
      <div className="component-box">
        <div className="componenent-box-title">
          <h2>{this.props.title}</h2>
        </div>
        <ul className="component-box-list">
          {this.props.lista.map(renderList)}
        </ul>
      </div>
    )

  }

};

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to React</h2>
        </div>
        

         <Box title={title1} lista={lista1} />

         <Box title={title2} lista={lista2} />

      </div>
    );
  }
}

export default App;