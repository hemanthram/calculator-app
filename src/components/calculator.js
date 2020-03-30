import React , { useState } from 'react';
import Header from './header';
import GetInput from './getInput';
import Result from './result';
import {Link} from 'react-router-dom';

const Calculator = (props) => {

    const [number, setNumber] = useState(0);
    const [result, setResult] = useState('-');
    const [op, setOp] = useState('none');
    const [start, setStart] = useState(1);

    const setOperation = (oper,alt) => {
        setOp(oper);
        if(start === 1) {
            setStart(0);
            setResult(alt);
        }
    }

    const changeNumber = (newNumber) => {setNumber(newNumber);};

    const calculate = () => {
        console.log('calculating')
        if(op === 'add'){addition();}
        else if(op === 'sub'){subtraction();}
        else if(op === 'mul'){multiplication();}
        else if(op === 'div') {division();}
        else {alert('Select Operation');}
    }    

    const addition = () => {
        console.log('add');
        setResult((result + number));
    }

    const subtraction = () => {
        setResult((result - number));
        console.log('sub');
    }

    const multiplication = () => {
        console.log('mul')
        if(start === 1) {setResult(number)}
        else {setResult(parseFloat((number*result).toFixed(3)))}
    }

    const division = () => {
        console.log('div')
        if(number === 0) {alert('Division by zero')}
        else {setResult(parseFloat((result / number).toFixed(3)));}
    }

    const reset = () => {
        setNumber(0);
        setStart(1);
        setOp('none');
        setResult('-');
    }

    return (
        <div className = 'container_main'>
            <Header 
                title='<Calculator/>' 
                subtitle='created_by_hemanth' />
            <Result 
                result = {result}
                op = {op} />
            <GetInput 
                changeNumber = {changeNumber}
                setOperation = {setOperation}
                calculate = {calculate} 
                reset = {reset} />
            <div className='container'><Link className='link' to='/new_route'> Click here to go to the other Route !! </Link></div>
        </div>
    )
}

export default Calculator;