import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import './index.css'

export default class Header extends Component {
    handleKeyUp = (event)=>{
        const {target,keyCode} = event
        if(keyCode !== 13) return
        if(target.value.trim() === ''){
            alert('输入不能为空')
            return
        }

        //准备好一个todo对象
        const todoObj = {id:nanoid(),name:target.value,done:false}
        this.props.addTodo(todoObj)
        target.value = ''
    }
        
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        )
    }
}
