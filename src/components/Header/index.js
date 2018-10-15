import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Header = (props) => {
    return (
        <div>
            <Link to="/">首页</Link>
            <br />
            {
                props.login ? (
                    <Fragment>
                        <Link to="/login">翻译列表</Link>
                        <br />
                        <Link to="/login">退出</Link>
                    </Fragment>
                ) : (
                        <Fragment>
                            <Link to="/login">登录</Link>
                            <br />
                        </Fragment>
                    )
            }
        </div>
    )
}

const mapState = (state) => ({
    login: state.header.login
})

export default connect(mapState, null)(Header)
