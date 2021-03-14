import React, { Component } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import List from './components/List'
import './App.css'


export default class App extends Component {
    state = {todos:[
        {id:'01',name:'eat',done:true},
        {id:'02',name:'sleep',done:true},
        {id:'03',name:'code',done:false},
        {id:'5',name:'shopping',done:false}
    ]}
    addTodo = (todoObj) =>{
        //获取原todo值
        const {todos} = this.state
        //追加
        const newTodos = [todoObj,...todos]
        //更改状态
        this.setState({todos:newTodos})
    }
    addChange = (id,done) =>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            if(todoObj.id === id) return {...todoObj,done}
            else return {...todoObj}
        })
        this.setState({todos:newTodos})
    }
    deleteTodos = (id)=>{
        const {todos} = this.state
        const newTodos =  todos.filter((todoObj)=>{
            return todoObj.id !== id
        })
        this.setState({todos:newTodos})
    }
    checkAll = (done)=>{
        const {todos} = this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }
    clearAllDone = ()=>{
        const {todos} = this.state
        const newTodos =  todos.filter((todoObj)=>{
            return todoObj.done === false
        })
        this.setState({todos:newTodos})
    
    }
    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
            <div className="todo-wrap">
               <Header addTodo={this.addTodo}/> 
               <List todos={todos} addChange={this.addChange}  deleteTodos={this.deleteTodos}/> 
               <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/> 
            </div>
            </div>
        )
    }
}
