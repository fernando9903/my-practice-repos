import React from 'react';
import ReactDOM from 'react-dom';
//import FirstApp from './FirstApp';
import CounterApp from './CounterApp';
import '../src/index.css'

const divRoot = document.querySelector('#root');

ReactDOM.render(<CounterApp value={10}/>, divRoot);