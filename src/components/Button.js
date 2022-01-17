/**
 * Created by liuml on 2017/5/3.
 */
import React from 'react';

class Button extends React.Component {

    /* getDefaultProps() {
     return {
     onClick: null,
     text: '',
     className: ''
     }
     }*/
    //静态属性，给属性赋默认值
    static defaultProps = {
        onClick: null,
        className: '',
        text: '默认'
    };


    render() {
        return <button className={`Button ${this.props.className}`} onClick={this.props.onClick}>
            {this.props.text}
        </button>
    }
}

export default Button;