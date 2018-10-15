import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'

class Header extends React.Component {
    render() {
        const { login, handleLogin } = this.props
        return (
            <div>
                <Link to="/">首页</Link>
                <br />
                {
                    login ? (
                        <Fragment>
                            <Link to="/translation">翻译列表</Link>
                            <br />
                            <div onClick={handleLogout}>退出</div>
                        </Fragment>
                    ) : (
                            <Fragment>
                                <div onClick={handleLogin}>登录</div>
                                <br />
                            </Fragment>
                        )
                }
            </div>
        )
    }
}

const mapState = (state) => ({
    login: state.header.login
})

const mapDispatch = (dispatch) => ({
    handleLogin() {
        dispatch(actions.login())
    },
    handleLogout() {
        dispatch(actions.logout())
    }
})

export default connect(mapState, mapDispatch)(Header)
