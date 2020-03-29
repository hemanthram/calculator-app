import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/calculator';
import Part2 from './components/part2'
import {Route, BrowserRouter} from 'react-router-dom'
import './styles/style.scss'

const routes = (
    <BrowserRouter>
        <div>
            <Route 
                path='/' 
                component = {Calculator} 
                exact = {true} />
            <Route
                path='/new_route'
                component = {Part2} />
        </div>
    </BrowserRouter>
)


ReactDOM.render(routes,document.getElementById('app'))