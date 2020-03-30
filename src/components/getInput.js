import React, {useState} from 'react';

const GetInput = (props) => {

    const [number,setNumber] = useState('0');

    const setInput = (e) => {
        const num = e.target.value;

        if(e.target.value.length < number.length){
            setNumber(e.target.value);
            if(e.target.value.length === 0){
                props.changeNumber(0);
                return
            }
            props.changeNumber(parseInt(num));
            return
        }

        if(String(parseInt(num)).length === num.length) {
            setNumber(num);
            props.changeNumber(parseInt(num));
        }
        else {  
            alert('No alphanumeric or leading zeros allowed')
            e.target.value = number;
        }
    } 

    const operation = (e) => {
        const num = document.getElementById('input').value;
        let fin = parseInt(num);
        if(isNaN(fin)) {fin = 0;}      
        console.log(fin)
        props.changeNumber(fin)
        props.setOperation(e.target.name,fin)
    }
    
    const clearInput = () => {
        document.getElementById('input').value = '0';
        setNumber('0');
        props.changeNumber(0);
    }

    const Calculate = () => {
        const num = parseInt(document.getElementById('input').value);
        if(isNaN(num)) {document.getElementById('input').value = '0';} 
        props.calculate()
    }

    const Reset = () => {
        document.getElementById('input').value = '0';
        setNumber('0');
        props.reset();
    }

    return (
        <div>
            <div className='container'><input 
                className = 'input__text'
                type='text' 
                name = 'number' 
                onChange = {setInput}
                id = 'input'
                placeholder='input please !' /></div>
            <div className ='container1'><button 
                className = 'input__button'
                onClick = {clearInput}> Clear Input </button></div>
            <div className='container1'><button 
                onClick = {operation} 
                name='add'
                className = 'button add'>+</button>
            <button 
                onClick = {operation} 
                name='sub'
                className = 'button'>-</button>
            <button 
                onClick = {Calculate} 
                name='equal2'
                className = 'button equal2'>=</button></div>
            <div className='container1'><button 
                onClick = {operation} 
                name='mul'
                className = 'button'>*</button>
            <button 
                onClick = {operation} 
                name='div'
                className = 'button'>/</button>
            <button 
                onClick = {Reset}
                className = 'button reset'>0</button></div>
        </div>
    )
};

export default GetInput;