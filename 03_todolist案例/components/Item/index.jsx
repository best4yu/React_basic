import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = {
        mouse:false
    }
    handleMouse = (flag) =>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    handleChange = (id)=>{
        return(event)=>{
            this.props.addChange(id,event.target.checked)
        }
    }
    
    handleDelete = (id)=>{
        return()=>{
            if(window.confirm('确定删除吗')){
            this.props.deleteTodos(id)
        }
        }
    }

    render() {
        const {id,name,done} = this.props
        return (
                <li  style={{backgroundColor : this.state.mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                <input onChange={this.handleChange(id)} type="checkbox" checked={done}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger" style={{display:this.state.mouse ? 'block' : 'none'}}>删除</button>
                </li>
        )
    }
}
