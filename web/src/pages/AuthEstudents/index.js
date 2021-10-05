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
      const res = await axios.post(`${server}/signin`, {
        cpf: cpf.replaceAll('.', '').replace('-', ''),
        pass: password
      })
      alert(`Aluno Logado`)

      localStorage.setItem('logadoUser', res.data.token )
      localStorage.setItem('admin', 0 )
      console.log(res.data)

      axios.defaults.headers.common['Authorization'] = `bearer ${localStorage.getItem('logadoUser')}`
      // setLogado(1)
      window.location.href = '/literaryWorks'
    } catch (e) {
      alert(`Usuário não encontrado ou senha/cpf invalidos`)
    }

  }

  return (
    <div id="authStudent_container">
      <span id="authStudent_employees"><a href="/auth">Funcionários</a></span>
      <div id="authStudent_image">
        <img src={bookGG} alt="livro" />
        <main>
          <h1 className="authStudent_Text">Biblioteca</h1>
        </main>
      </div>
      <div>
        <form >
          <div className="authStudent_input">
            <input type="text" name="text" id="authStudent_text" placeholder="CPF" value={cpf} onChange={e => setCpf( cpfMask( e.target.value ))} />
          </div>
          <div className="authStudent_input">
            <input type="password" name="password" id="authStudent_password" placeholder="Senha" value={password} onChange={e => setPassWord(e.target.value)} />
          </div>
          <div className="authStudent_input">
            <input className="authStudent_submit" type="submit" value="Entrar" onClick={e => authentication(e)} />
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
