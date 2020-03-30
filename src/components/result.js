import React , { useState } from 'react';

const Result = (props) => {
    const getOperation = (i) => {
        if(i === 'add') {return '+'};
        if(i === 'sub') {return '-'};
        if(i === 'mul') {return 'x'};
        if(i === 'div') {return '/'};
        return '-__-';
    }

    return (
        <div className='container'>
            <div className='res'><p className='result'>Your Answer</p>
            <p className='answer'>{props.result}</p></div>
            <div className='op'><p className='operation'>Operation</p>
            <p className='sym'>{getOperation(props.op)}</p></div>
        </div>
    )
}

export default Result;