/**
 * Created by liuml on 2017/5/3.
 */
import React from "react";
import DisplayLog from "./DisplayLog";
import Button from "./Button";
import format from '../utils/formatTime';
// import formatTime from '../utils/formatTime';
class TimeDisplay extends React.Component {

    //在构造函数中对状态赋初始值
    constructor(props) {
        super(props);
        //不能调用setstate
        // setstate
        this.state = {
            time: 0,
            on: false,
            log: []//数组
        };

    }

    // handleToggel() {
    //
    //     // alert("点击了");
    //     //计时器  this 需要在运行时才能确定  箭头函数的作用域在最外层
    //     setInterval(() => this.state.setState({time: this.state.time + 1}), 10);
    // }
    handleToggel = () => {
        // alert("点击了");
        if (this.state.on) {
            clearInterval(this.timer)
        } else {
            //计时器  this 需要在运行时才能确定  箭头函数的作用域在最外层
            this.timer = setInterval(() => {
                this.setState({time: this.state.time + 1});
                console.log("timer");
                0
            }, 10);
        }
        this.setState({on: !this.state.on});
    }

    handleLogTime = () => {
        //存储在数组中
        // var a =[];
        // var b = new Array();
        this.state.log.push(this.state.time);
        console.log(this.state.log);
    }
    handleClearLog = () => {
        this.setState({log: []});
    }
    handleReset = () => {

        this.setState({time: 0});
        this.setState({log: []});
    }

    render() {
        var time = format(this.state.time);
        return <div>
            {/*<h1 className="display-time">{this.state.time}</h1>*/}
            <h1 className="display-time">{time}</h1>
            <div className="controls">
                {/* <button className="Button success">开始</button>
                 <button className="Button warning">重置</button>
                 <button className="Button primary">记录</button>
                 <button className="Button undefned">清空</button>*/}
                <Button className="success" text={this.state.on ? "暂停" : "开始"} onClick={this.handleToggel}/>
                <Button className="warning" text="重置" onClick={this.handleReset}/>
                <Button className="primary" text="记录" onClick={this.handleLogTime}/>
                <Button className="undefned" text="清空" onClick={this.handleClearLog}/>
            </div>
            <DisplayLog log={this.state.log}/>
        </div>
    }

    //渲染完成之后 监听键盘时间
    componentdidMount() {//这个window 是浏览器存就响应
        window.addEventListener('keydown', e => e.preventDefault());//屏蔽按下事件
        window.addEventListener('keyup', e => {
            e.preventDefault();
            switch (e.keyCode()) {
                case 32:
                    this.handleToggel();//空格键
                    break;
                case 82:
                    this.handleReset();
                    break;
                case 13:
                    this.handleLogTime();
                    break;
                case 67:
                    this.handleClearLog();
                    break;
                default:
                    break;
            }
        })

    }

    //所以组件被溢出 事件监听取消
    componentWlilUnmount() {
        window.removeEventListener('keydown');
        window.removeEventListener('up');
    }
}
//导出 在外部使用
export default TimeDisplay;