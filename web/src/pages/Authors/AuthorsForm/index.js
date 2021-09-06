import React, { useState } from 'react';
import autor from '../../../assets/images/icons/autores.svg';
import retorno from '../../../assets/images/icons/return.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';
import axios from 'axios';
import { server } from '../../../common';
import { Redirect } from 'react-router';

function AuthorsForm(props) {

  const [nome, setNome] = useState()
  const [paisOrigem, setPaisOrigem] = useState()
  const [notacao, setNotacao] = useState()
  const [genero, setGenero] = useState()
  const [redirect, setRedirect] = useState(false)
  const [carregado, setCarregado] = useState(false)

  const params = props.match.params.id

  const authoresLoading = () => {

  }

  if (params != undefined) {
    if (!carregado) {
      axios.get(`${server}/authors/${params}`)
        .then(auts => {
          const aut = auts.data
          setNome(aut.name)
          setPaisOrigem(aut.countryOrigin)
          setNotacao(aut.authorsNotation)
          setGenero(aut.genre)
        })

      setCarregado(true)
    }
  }

  const cancelar = (e) => {
    e.preventDefault()
    setRedirect(true)
  }

  const cadastrar = (e) => {
    e.preventDefault()

    if (params != undefined) {
      axios.put(`${server}/authors/${params}`, {
        name: nome,
        countryOrigin: paisOrigem,
        authorsNotation: notacao,
        genre: genero,
      }).then(_ => {
        alert('Salvo com sucesso!')
        setRedirect(true)
      }).catch(e => {
        alert('Algo de errado')
      })
    }
    else {
      alert('cadastrar')
      axios.post(`${server}/authors`, {
        name: nome,
        countryOrigin: paisOrigem,
        authorsNotation: notacao,
        genre: genero,
      }).then(_ => {
        alert('Salvo com sucesso!')
        setRedirect(true)
      }).catch(e => {
        alert('Algo de errado')
        console.log(e)
      })
    }

  }

  return (
    <div id="container">
      <Menu />

      <div id="main">
        <div id="createAuthorsF">
          <div id="new">
            <img src={autor} alt="autores" />
            <span>Autores</span>
          </div>
          <div id="new_button">
            <button><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        <div id="authorF_list">
          <section>
            {!params ? <h2>Novo Autor</h2> : <h2>Alterar Autor</h2>}
            <form>
              <fieldset>
                <div>
                  <label className="authorF_name" for="name">Nome:</label>
                  <input type="text" name="name" id="authorF_name" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite o nome" />
                </div>
                <div>
                  <label for="countryOrigin">País de origem:</label>
                  <input type="text" name="countryOrigin" id="authorF_countryOrigin" value={paisOrigem} onChange={e => setPaisOrigem(e.target.value)} placeholder="Digite o país de origem" />
                </div>
                <div>
                  <label for="authorsNotation">Notação do autor:</label>
                  <input type="text" name="authorsNotation" id="authorF_authorsNotation" value={notacao} onChange={e => setNotacao(e.target.value)} placeholder="Digite a notação" />
                </div>
                <div>
                  <label for="genre">Gênero literário:</label>
                  <input type="text" name="genre" id="authorF_genre" value={genero} onChange={e => setGenero(e.target.value)} placeholder="Digite o gênero literário" />
                </div>
              </fieldset>
              <div id="authorF_input">
                <input className="authorF_confirm" type="submit" value="Cadastrar" onClick={e => cadastrar(e)} />
                <input className="authorF_cancel" type="submit" value="Cancelar" onClick={e => cancelar(e)} />
              </div>
            </form>
          </section>
        </div>
        {redirect && <Redirect to='/authors' />}
      </div>
    </div>
  );
}

export default AuthorsForm;
