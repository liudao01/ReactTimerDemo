/**
 * Created by liuml on 2017/5/3.
 */
/*
 //这是一种写法
 import React from 'react';
 class DisplayLog extends React.Component(){

 }*/

//这是另一种写法  相当于引入React中的Component组件
// import React, {Component} from 'react';
import React from 'react';
import format from '../utils/formatTime';
class DisplayLog extends React.Component {


    renderEmpty = () => {
        return <span className="empty-log">暂无数据</span>
    }

    renderLog = () => {
        return this.props.log.map(item => {
            return <li className="log-item">{format(item)}</li>
        })
    }

    render() {
        const log = this.props.log.length === 0 ? this.renderEmpty() : this.renderLog()
        return <ul className="log">
            {log}
        </ul>;
    }
}
export default DisplayLog;