import React , { useState } from 'react';

const Result = (props) => {
    const getOperation = (i) => {
        if(i === 'add') {return '+'};
        if(i === 'sub') {return '-'};
        if(i === 'mul') {return '*'};
        if(i === 'div') {return '/'};
        return 'Not selected';
    }

    return (
        <div>
            <p>Result = {props.result}</p>
            <p>Operation = {getOperation(props.op)}</p>
        </div>
    )
}

export default Result;