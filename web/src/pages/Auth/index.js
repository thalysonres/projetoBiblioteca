import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import bookGG from '../../assets/images/book-gg.svg';
import { server } from './../../common'
import { cpfMask } from '../../utils';
import './styles.css';

function Auth() {

  const [cpf, setCpf] = useState()
  const [password, setPassWord] = useState()
  const [logado, setLogado] = useState(0)

  const authentication = async (e) => {
    e.preventDefault()
    
    try {
      const res = await axios.post(`${server}/signin2`, {
        cpf: cpf.replaceAll('.', '').replace('-', ''),
        pass: password
      })
      alert(`Funcionário(a) Logado(a)`)

      localStorage.setItem('logadoUser', res.data.token )
      localStorage.setItem('admin', 1 )
      console.log(res.data)

      axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('logadoUser')}`
      // setLogado(1)
      window.location.href = '/students'
    } catch (e) {
      alert(`Usuário não encontrado ou senha/cpf inválidos`)
    }

  }

  return (
    <div id="auth_container">
      <div id="auth_image">
        <img src={bookGG} alt="livro" />
        <main>
          <h1 className="auth_Text">Funcionário</h1>
        </main>
      </div>
      <div>
        <form >
          <div className="auth_input">
            <input type="text" name="text" id="auth_text" placeholder="CPF" value={cpf} onChange={e => setCpf( cpfMask( e.target.value ) )} />
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
