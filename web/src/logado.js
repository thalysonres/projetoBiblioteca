import axios from "axios"
import { Redirect } from "react-router-dom"
import Auth from "./pages/Auth"

export const logado = () => {
    // alert('tentando logar')
    if(!!localStorage.getItem('logadologadoUser')){
        axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('logadoUser')}`
    }else {
        (<Redirect to={Auth} />)
    }
}