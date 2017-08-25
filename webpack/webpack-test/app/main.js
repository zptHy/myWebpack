/**
 * Created by Administrator on 2017/8/24.
 */
//main.js
// const greeter = require('./Greeter.js');
// document.querySelector("#root").appendChild(greeter());


// main.js  ES 6
import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

//使用require导入main.css文件
import './main.css';
render(<Greeter />, document.getElementById('root'))