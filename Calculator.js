import './Calculator.css';
import Button from './Button';
import Display from './Display';
import React, {useRef} from 'react';
import * as math from 'mathjs';

class Calculator extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: "",
      
    }
    this.inputRef = React.createRef();
    this.addToDisplay = this.addToDisplay.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  addToDisplay(val){
    if(val != "="){
      this.setState({
        display: this.state.display + val
      });
    }
    else{
      this.setState({
        display: math.evaluate(this.state.display)
      });
    }
  }

  handleKeyDown(event){
    const symbols = ["0","1","2","3","4","5","6","7","8","9","+","-","*","/"];
    
    if(symbols.find((symbol) => symbol === event.key)){
      this.setState({
        display: this.state.display + event.key
      });
    }
    else if(event.key === ' '){
      this.setState({
        display: " "
      });
    }
    else{
      this.setState({
        display: math.evaluate(this.state.display)
      });
    }
  }

  render(){
    return (
      <div className='calculator'>
        <input onKeyDown={this.handleKeyDown} autoFocus ></input>
        <Display display={this.state.display} />
        
        <div className='grid'>
          <Button value="7" callBack={this.addToDisplay} />
          <Button value="8" callBack={this.addToDisplay} />
          <Button value="9" callBack={this.addToDisplay} />
          <Button value="/" callBack={this.addToDisplay} />
          <Button value="4" callBack={this.addToDisplay} />
          <Button value="5" callBack={this.addToDisplay} />
          <Button value="6" callBack={this.addToDisplay} />
          <Button value="x" callBack={this.addToDisplay} />
          <Button value="1" callBack={this.addToDisplay} />
          <Button value="2" callBack={this.addToDisplay} />
          <Button value="3" callBack={this.addToDisplay} />
          <Button value="+" callBack={this.addToDisplay} />
          <Button value="." callBack={this.addToDisplay} />
          <Button value="0" callBack={this.addToDisplay} />
          <Button value="=" callBack={this.addToDisplay} />
          <Button value="-" callBack={this.addToDisplay} />
        </div>

        <div value="clear" className='clear' onClick={() => this.setState({display: ""})}>Clear</div>
      </div>
    );
  }
}

export default Calculator;
