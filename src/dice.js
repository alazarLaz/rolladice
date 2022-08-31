import React, { Component } from 'react'

export default class Dice extends Component {
    constructor(props){
        super(props);
        this.state = {
            num1: 1,
            num2: 6,
            rolling: false
        }
    }
    handleClick = (e)=>
    {
        console.log('clicked')
        this.setState({rolling:true})
        setTimeout(()=>
        {
            this.setState({
                num1 : Math.floor(Math.random()*5)+1,
                num2 : Math.floor(Math.random()*5)+1,
                rolling:false
            }) 
        },1000)
        console.log('finished')
        
    }
  render() {
    let obj = {
        1:'one',2:'two',3:'three',4:'four',5:'five',6:'six'
    }
    


    return (
      <div className='dice-box'>
        <div className='dice'>
            <i className={`${this.state.rolling?'shaking':''} icn fas fa-dice-${obj[this.state.num1]}`}></i>
            <i className={`${this.state.rolling?'shaking':''} icn fas fa-dice-${obj[this.state.num2]}`}></i>
        </div>
        <button onClick={ this.handleClick } className='btn'>{this.state.rolling?'Rolling':'Roll A Dice!!!'}</button>
      </div>
    )    
  }
}
