import React, { useState } from 'react';
import './styles.css';
import bookGG from '../../assets/images/book-gg.svg';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { server } from './../../common'

function Auth() {

  const [cpf, setCpf] = useState()
  const [password, setPassWord] = useState()
  const [logado, setLogado] = useState(0)

  const authentication = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${server}/signin2`, {
        cpf: cpf,
        pass: password
      })
      alert(`Funcionario Logado`)

      localStorage.setItem('logadoUser', res.data.token )
      console.log(res.data)

      axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('logadoUser')}`
      setLogado(1)
    } catch (e) {
      alert(`Usuario não encontro ou senha/cpf invalidos`)
    }

  }


  return (
    <div id="auth_container">
      <div id="auth_image">
        <img src={bookGG} alt="livro" />
        <main>
          <h1 className="auth_Text">Biblioteca</h1>
        </main>
      </div>
      <div>
        {/* <div>{cpf}</div> */}
        <form >
          <div className="auth_input">
            <input type="text" name="text" id="auth_text" placeholder="CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
          </div>
          <div className="auth_input">
            <input type="password" name="password" id="auth_password" placeholder="Senha" value={password} onChange={e => setPassWord(e.target.value)} />
          </div>
          <div className="auth_input">
            <input className="auth_submit" type="submit" value="Entrar" onClick={e => authentication(e)} />
          </div>
        </form>
      </div>
      {(logado === 1) &&
        <Redirect to="/students" />
      }
    </div>
  );
}

export default Auth;
