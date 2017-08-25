/**
 * Created by Administrator on 2017/8/24.
 */
// Greeter.js
// var config = require('./config.json');
// module.exports = function() {
//     var greet = document.createElement('div');
//     // greet.textContent = "卧槽 真的能随时改变啊 去你的，老子作了一上午";
//     greet.textContent = config.greetText;//config.json
//     return greet;
// };

//ES6语法，更新Greeter.js并且返回一个React组件
import React, {Component} from 'react';
import config from './config.json';
import styles from './Greeter.css';//导入

class Greeter extends Component{
    render() {
        return (
            <div className={styles.root}>
        {config.greetText}
    </div>
    );
    }
}

export default Greeter