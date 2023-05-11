
import './App.css';
import React, { Component,Fragment } from 'react';
import styled from 'styled-components';



const EmpItem=styled.div`
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 5px 5px 10px rgba(0,0,0, .2);
  a {
    display: block;
    color: ${ props => props.active ? 'orange' : 'black'};
  }
  input {
    display: block;
    margin-top: 20px;
  }
`;

const Header=styled.h2`
  font-size: 22px;
`

export const Button=styled.button`
  display: block;
  padding: 5px 15px;
  background-color: gold;
  border: 1px solid;
  box-shadow: 5px 5px 15px rgba(0,0,0, .2);
`

class WhoAmI extends Component{
    constructor(props){
      super(props);
      this.state={
          years: 1019,
          text: "add 1 ",
          position: ''

      }
      this.nextYear=this.nextYear.bind(this); // вместо вызова стрелочной функции 

    }

    commitInputChanges = (e) =>{ // колбэк чтобы сначала успевал появляться новый возраст, только затем вызывалась функция добавления ещё 1года
      this.setState({
        position: e.target.value
      })
    }
    // когда вызыв-ся setStaate, вызыв-ся render() - и перерисов-ся только нужные элементы

    nextYear (e, color) {   
      console.log(color);
      this.setState(state=>(
        {
          years: ++state.years
        }))
    }
    
    render(){  
      const {name,surname,link}=this.props; // чтобы не писать ниже this.props.name , this.props.surname..
      const {position}=this.state;
      return(
        <EmpItem active>
          <Button onClick={(e)=> this.nextYear(e, 'blue-red')}>{this.state.text}</Button> 
          {/* если где-то ниже используем этот метод как пропс - он меняется, это заново заставит его перерисоваться   

          */}

          <Button onClick={this.nextYear}>{this.state.text}</Button>
          
          <Header>My name is {name}, surname - {surname}, 
          age-{this.state.years}, position - {position}</Header>
          <a href={link}>My profile </a>
          <form action="" >
            <span>Введите должность</span>
            <input type="text" onChange={this.commitInputChanges}/>
          </form>
        </EmpItem>
      )
      // this в методах используется для указания экземпляра класса(похоже на объекты JS)
    }
}

// function WhoAmI({name,surname, link}){
//   return(
   
//     <div>
      
//       <h1>My name is {name.firstname}, surname - {surname}</h1>
//       <a href={link}>My profile </a>

//     </div>
//   )
// }


const Greating=(props)=>{
  return(
    <div className={'mb-3 p-3 border border-'+props.color}>
      {React.Children.map(props.children, child=>{
        return React.cloneElement(child, {className: 'shadow p-3 m-3 border rounded'})
      })}
    </div>
  )
}

const Message=(props)=>{
  return(
    <h2> The counter is {props.counterMes}</h2>
  )
}

class Counter extends Component{
  state={
    counter:0
  }


  changeCounter=()=>{
    this.setState(({counter})=>({
      counter: counter+1
    }))
  }

  render(){
    return(
      <>
        <button
        className={'btn btn-primary'}
        onClick={this.changeCounter}>
          Click it now</button>
          {this.props.render(this.state.counter)}
      </>
    )
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '20vh' }} onMouseMove={this.handleMouseMove}>

        {/* ...но как можно отрендерить что-то, кроме <p>? */}
        <p>Текущее положение курсора мыши: ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>Перемещайте курсор мыши!</h1>
        <Mouse />
      </>
    );
  }
}

const Wrapper=styled.div`
  width: 600px;
  margin: 80px auto 0 auto;
  background-color: #fa3383;
`;

 // {name()}
 // name={()=>{return '1+3;'}}
function App() {
  return (
    <Wrapper>
      <MouseTracker/>
      <Counter render={counterr=>(
        <Message counterMes={counterr}/>
      )}/>
      <Greating color='info'>
        <h2>nothing lasts forever</h2>
        <h2>i go and do always</h2>
      </Greating>
      <WhoAmI name={'JONNNy'} surname="Lamp" link="facebook.com"/>
      <WhoAmI name={'sLIM sHADY'} surname="eMIN" link="VK.COM"/>


      {/* <WhoAmI name={{firstname: "Adeek"}} surname="Lamp" link="facebook.com"/>
      <WhoAmI name={{firstname: "Fernando"}} surname="Torres" link="facebook.com"/> */}
    </Wrapper>
  );
}

export default App;
