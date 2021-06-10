import React, { useEffect, useState } from 'react';
import autor from '../../../assets/images/icons/autores.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../../common';
let teste = 0
function AuthorsList() {


  const loadingAuthors = async () => {

    const autores = await axios.get(`${server}/authors`)
      .then(aut => aut.data)
      .catch(e => console.log('erro: ', e))

    setAuthor(autores)
    // console.log('lkd ', teste++, authorsL)
  }

  const deletar = (id) => {
    let resultado = window.confirm('Deseja realmente excluir?')
    if (resultado) {
      axios.delete(`${server}/authors/${id}`)
        .then(_ => alert('Deletado com sucesso!'))
        .catch(e => alert('algo deu errodo'))
    }

  }

  const [authorsL, setAuthor] = useState([])

  useEffect(() => {
    loadingAuthors()
  })

  return (
    <div id="container">

      <Menu />

      <div id="main">
        <div id="create">
          <div id="new">
            <img src={autor} alt="autores" />
            <span>Autores</span>
          </div>
          <div id="new_button">
            <Link className="button" to="/authorsform">+</Link>
          </div>
        </div>

        <div id="author_list">
          <section className="author_allAuthors">
            <table cellSpacing={0}>
              <thead className="author_title">
                <tr>
                  <th>Notação do autor</th>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="author_list">
                {authorsL.map(aut => (
                  <tr>
                    <th>{aut.authorsNotation}</th>
                    <th>{aut.name}</th>
                    <th>
                      <Link to={`/authorsform/${aut.id}`}><img src={editar} alt="editar" /></Link>
                      <img src={excluir} alt="excluir" onClick={() => deletar(aut.id)} />
                    </th>
                  </tr>
                ))

                }
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AuthorsList;
