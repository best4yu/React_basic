import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
    Search = ()=>{
        //获取用户的输入(连续解构赋值+重命名)
        const {keyWordElement:{value:keyword}} = this
        this.props.upDateApp({isFirst:false,isLoading:true});
        //发送网络请求
        axios.get(`http://localhost:3000/api/search/users?q=${keyword}`).then(
            response=>{
                this.props.upDateApp({users:response.data.items,isLoading:false})
            },
            error=>{this.props.upDateApp({err:error.message,isLoading:false})}
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
