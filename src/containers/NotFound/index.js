import React from 'react'

export default class NotFound extends React.Component {
    componentWillMount(){//这个生命周期 服务器端也会运行
        const {staticContext} = this.props
        staticContext && (staticContext.NotFound = true)
    }
    render() {
        return <div>404, sorry, page not found</div>
    }
}