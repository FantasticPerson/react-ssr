//这个函数返回一个组件
//生成高阶组件
import React,{Component} from 'react'
import { render } from './server/utils';
export default (DecoratedComponent,styles)=>{
    return new NewComponent extends Componet{
        componentWillMount(){    
            if(this.props.staticContext){
                this.props.staticContext.css.push(styles._getCss())
            }
        }

        render(){
            return <DecoratedComponent {...this.props}></DecoratedComponent>
        }
    }
}