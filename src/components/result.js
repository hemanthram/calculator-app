import React , { useState } from 'react';

const Result = (props) => {
    const getOperation = (i) => {
        if(i === 'add') {return '+'};
        if(i === 'sub') {return '-'};
        if(i === 'mul') {return '*'};
        if(i === 'div') {return '/'};
        return 'Not Selected';
    }

    return (
        <div className='container'>
            <h1 className='result'>Result</h1>
            <p className='input__text'>{props.result}</p>
            <p className='operation'>Operation</p>
            <p className='input__text'>{getOperation(props.op)}</p>
        </div>
    )
}

export default Result;