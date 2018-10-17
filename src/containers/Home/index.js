import React, { Component, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import Header from '../../components/Header'
import { connect } from 'react-redux'
import { getHomeList } from './store/actions'
import styles from './style.css'
//同构 ： 一套react代码  在服务器端执行 在客户端再执行一次

class Home extends Component {

    componentWillMount() {
        if (this.props.staticContext) {
            this.props.staticContext.css.push(styles._getCss())
        }
    }

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
            <Fragment>
                <Helmet>
                    <title>这是dell的ssr新闻页面 - 丰富多彩的资讯</title>
                    <meta name="description" content="这是dell的ssr新闻页面 - 丰富多彩的资讯"></meta>
                </Helmet>
                <div className={styles.test}>
                    {this.getList()}
                    <button onClick={() => { alert('click') }}>click</button>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    newsList: state.home.newsList
})

const mapDispathToProps = dispatch => ({
    getHomeList() {
        dispatch(getHomeList())
    }
})

const ExportHome = connect(mapStateToProps, mapDispathToProps)(Home)

ExportHome.loadData = (store) => {
    return store.dispatch(getHomeList())
    // console.log('data')
    //这个函数负责在服务端渲染之前，将数据加载好
}

export default ExportHome
