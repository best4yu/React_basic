import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import './index.css'

export default class List extends Component {
    state = { users:[],//初始化状态
        isFirst:true,//是否第一次打开
        isLoading:false,//是否在搜索
        err:''
        }

    componentDidMount(){
        this.token = PubSub.subscribe('needinfo',(msg,data)=>{
            this.setState(data)
        })
    }
    componentWillUnmount(){
        PubSub.unsubscribe(this.token)
    }
    render() {
        const {users,isFirst,isLoading,err} = this.state
        return (
            <div className="row">
                {   isFirst ? <h2>welcome,please input</h2> : 
                    isLoading ? <h2>loading</h2> :
                    err ? <h2 style={{color:'red'}}>{err}</h2> :
                    users.map((userObj)=>{
                    return(
                    <div key={userObj.id} className="card">
                    <a rel="noreferrer" href={userObj.html_url} target="_blank">
                    <img alt='head_pic' src={userObj.avatar_url} style={{width: '100px'}}/>
                    </a>
                    <p className="card-text">{userObj.login}</p>
                    </div>
                    )
                    })
                }
            </div>
            
        )
    }
}
