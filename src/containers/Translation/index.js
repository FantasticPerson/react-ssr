import React, { Component } from 'react'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getTranslationList } from './store/actions'
import { Redirect } from 'react-router-dom'
//同构 ： 一套react代码  在服务器端执行 在客户端再执行一次

class Translation extends Component {

    componentDidMount() {
        if (!this.props.list.length) {
            this.props.getTranslationList()
        }
    }

    getList() {
        const { list } = this.props
        return list.map(item => <div key={item.id}>{item.title}</div>)
    }

    render() {
        if (this.props.login) {
            return (
                <div>
                    {this.getList()}
                </div>
            )
        } else {
            return <Redirect to="/"/>
        }
    }
}

Translation.loadData = (store) => {
    return store.dispatch(getTranslationList())
    // console.log('data')
    //这个函数负责在服务端渲染之前，将数据加载好
}

const mapStateToProps = state => ({
    list: state.translation.list,
    login: state.header.login
})

const mapDispathToProps = dispatch => ({
    getTranslationList() {
        dispatch(getTranslationList())
    }
})

export default connect(mapStateToProps, mapDispathToProps)(Translation)

// export default Translation
