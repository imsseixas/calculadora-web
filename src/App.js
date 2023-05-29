import Input from "./components/Input";
import Button from "./components/Button";
import { Container, Content, Row, Column } from "./styles";
import { useState } from "react";


const App = () => {
  const [currenteNumber, setCurrentNumber] = useState('0'); 
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')
  
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
  }

  const handleSumNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currenteNumber);
      setCurrentNumber('0');
      setOperation('+')
    }else{
      const sum = Number(firstNumber) + Number(currenteNumber);
      setCurrentNumber(String(sum))
      setOperation('')
    }
  }

  const handleMinusNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currenteNumber);
      setCurrentNumber('0');
      setOperation('-')
    }else{
      const Minus = Number(firstNumber) - Number(currenteNumber);
      setCurrentNumber(String(Minus))
      setOperation('')
    }
  }

  const handleMultplierNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currenteNumber);
      setCurrentNumber('0');
      setOperation('*')
    }else{
      const Multiplier = Number(firstNumber) * Number(currenteNumber);
      setCurrentNumber(String(Multiplier))
      setOperation('')
    }
  }

  const handleDivideNumber = () => {
    if(firstNumber === '0'){
      setFirstNumber(currenteNumber);
      setCurrentNumber('0');
      setOperation('/')
    }else{
      const Divide = Number(firstNumber) / Number(currenteNumber);
      setCurrentNumber(String(Divide))
      setOperation('')
    }
  }


  
  const handleEquals = () => {
    if(firstNumber != '0' && operation != '' && currenteNumber != '0'){
      switch(operation){
        case '+':
          handleSumNumber();
          break;
        case '-':
          handleMinusNumber();
          break;
        case '*':
          handleMultplierNumber();
          break;
        case '/':
          handleDivideNumber();
          break;
          default:
          break;
      }
    }
  }

  return (
    <Container className="App">
      <Content>
      <Input value = {currenteNumber} />
      <Row>
        <Button label = "*" onClick = {handleMultplierNumber}/>
        <Button label = "/" onClick = {handleDivideNumber}/>
        <Button label = "C" onClick = {handleOnClear} />
        <Button label = "."/>
      </Row>
      <Row>
        <Button label = "7" onClick={() => handleAddNumber('7')}/>
        <Button label = "8" onClick={() => handleAddNumber('8')}/>
        <Button label = "9" onClick={() => handleAddNumber('9')}/>
        <Button label = "-" onClick={handleMinusNumber}/>
      </Row>
      <Row>
        <Button label = "4" onClick={() => handleAddNumber('4')}/>
        <Button label = "5" onClick={() => handleAddNumber('5')}/>
        <Button label = "6" onClick={() => handleAddNumber('6')}/>
        <Button label = "+" onClick={handleSumNumber}/> 
      </Row>
      <Row>
        <Button label = "1" onClick={() => handleAddNumber('1')}/>
        <Button label = "2" onClick={() => handleAddNumber('2')}/>
        <Button label = "3" onClick={() => handleAddNumber('3')}/>
        <Button label = "=" onClick={handleEquals}/>
      </Row>
      </Content>
    </Container>
  );
}

export default App;
