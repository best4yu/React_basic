import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    changeAllcheckded = (event)=>{
        this.props.checkAll(event.target.checked)
    }
    clearAllDone = ()=>{
        this.props.clearAllDone()
    }
    render() {
        const {todos} = this.props
        const donecount = todos.reduce((pre,todos)=> pre+(todos.done  ? 1 : 0),0)
        console.log(donecount)
        const total = todos.length
        return (
            <div className="todo-footer">
                <label>
                <input type="checkbox" onChange={this.changeAllcheckded} checked={total === donecount && total!==0 ? true : false}/>
                </label>
                <span>
                <span>已完成{donecount}</span> / 全部{total}
                </span>
                <button className="btn btn-danger" onClick={this.clearAllDone}>清除已完成任务</button>
            </div>
        )
    }
}