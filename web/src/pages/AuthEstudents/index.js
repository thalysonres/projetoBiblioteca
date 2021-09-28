import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import bookGG from '../../assets/images/book-gg.svg';
import { server } from './../../common'
import './styles.css';

function Auth() {

  const [cpf, setCpf] = useState()
  const [password, setPassWord] = useState()
  const [logado, setLogado] = useState(0)

  const authentication = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${server}/signin`, {
        cpf: cpf,
        pass: password
      })
      alert(`Aluno Logado`)

      localStorage.setItem('logadoUser', res.data.token )
      localStorage.setItem('admin', 0 )
      console.log(res.data)

      axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('logadoUser')}`
      setLogado(1)
    } catch (e) {
      alert(`Usuário não encontrado ou senha/cpf invalidos`)
    }

  }


  return (
    <div id="auth_container">
      <span id="auth_employees"><a href="http://">Funcionários</a></span>
      <div id="auth_image">
        <img src={bookGG} alt="livro" />
        <main>
          <h1 className="auth_Text">Biblioteca</h1>
        </main>
      </div>
      <div>
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
        <Redirect to="/literaryWorks" />
      }
    </div>
  );
}

export default Auth;
