import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {
    Search = ()=>{
       
       //获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value:keyword}} = this
        PubSub.publish('needinfo',{isFirst:false,isLoading:true});
        //发送网络请求
        axios.get(`http://localhost:3000/api/search/users?q=${keyword}`).then(
            response=>{
               PubSub.publish('needinfo',{users:response.data.items,isLoading:false})
            },
            error=>{PubSub.publish('needinfo',{err:error.message,isLoading:false})}
            )
        

    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c =>this.keyWordElement = c} type="text" placeholder="enter the name you search"/>&nbsp;
                    <button onClick={this.Search}>Search</button>
                </div>
            </section>
        )
    }
}
