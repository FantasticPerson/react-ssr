import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
//同构 ： 一套react代码  在服务器端执行 在客户端再执行一次

class Home extends Component {

    componentDidMount() {
        if (!this.props.newsList.length) {
            this.props.getHomeList()
        }
    }

    getList() {
        const { newsList } = this.props
        return newsList.map(item => <div key={item.id}>{item.title}</div>)
    }

    render() {
        return (
            <div>
                {this.getList()}
                <button onClick={() => { alert('click') }}>click</button>
            </div>
        )
    }
}

Home.loadData = (store) => {
    return store.dispatch(getHomeList())
    // console.log('data')
    //这个函数负责在服务端渲染之前，将数据加载好
}

const mapStateToProps = state => ({
    newsList: state.home.newsList
})

const mapDispathToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})

export default connect(mapStateToProps, mapDispathToProps)(Home)
