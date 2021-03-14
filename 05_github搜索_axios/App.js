import React, { Component } from 'react'
import Search from './component/Search'
import List   from './component/List'

export default class App extends Component {
    state = { users:[],//初始化状态
    isFirst:true,//是否第一次打开
    isLoading:false,//是否在搜索
    err:''
    }
    upDateApp = (userObj) =>{
        this.setState(userObj)
    }
    render() {
        return (
            <div className="container">
                <Search upDateApp={this.upDateApp}/>
                <List {...this.state}/>
            </div>
        )
    }
}
