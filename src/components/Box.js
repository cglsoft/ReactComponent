import React from 'react';
import './Box.css';
/*
class UserInfo extends React.Component{
  render(props){   
    console.log(this.props.id)
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
   console.log('teste'+ this.props.id)
   return( <li key={this.props.id}> {this.props.title}</li>)
  }
}

*/

class Box extends React.Component{  

  render() {
    var renderList = (item) => {     
            if(item.avatar){
              return <li key={item.id}>
                <p>{item.title}</p>
                <img src={item.avatar}  alt={item.title}/>
              </li>
            }else{
              return <li key={item.id}>
                {item.title}             
              </li>
            }
    }

    return (
      <div className="component-box">
        <div className="componenent-box-title">
          <h2>{this.props.title}</h2>
        </div>
        <ul className="topContainer">
          {this.props.lista.map(renderList)}
        </ul>
      </div>
    )
  }
};

export default Box;