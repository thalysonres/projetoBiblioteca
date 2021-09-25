import React, { useEffect, useState } from 'react';
import livro from '../../../assets/images/icons/livros2.svg';
import retorno from '../../../assets/images/icons/return.svg';
import { Menu } from '../../../components/Menu';
import { server } from '../../../common';
import axios from 'axios';
import './styles.css';

function LiteraryWorksInfo(props) {

  const [literary, setLiterary] = useState('')

  const params = props.match.params.id
  // console.log('id é: ', params)

  useEffect( () => {

    axios.get(`${server}/literaryWorks/${params}`).then(res => {
      setLiterary(res.data)
      console.log(res.data)
    }).catch(e => {
      alert('Livros não encontrados')
      window.history.back()
    })

  }, [])

  return (
    <div id="container">
      <Menu />

      <div id="main">
        <div id="createLiteraryI">
          <div id="new">
            <img src={livro} alt="livros" />
            <span>Livros</span>
          </div>
          <div id="new_button">
            <button><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        <div id="literaryWorkI_list">
          <section>
            <h2>Título do livro: {literary.title}</h2>
            <table>
              <tbody>
                <tr className="literaryWorkI_title">
                  <th className="capa">Capa do livro</th>
                  <th colspan="4">Autor</th>
                </tr>
                <tr className="literaryWorkI_list">
                  <td rowspan="9"><img className="img-livro-info" alt={literary.title} src={literary.file} ></img></td>
                  <td colspan="4">{literary.author_id}</td>
                </tr>
                <tr className="literaryWorkI_title">
                  <th colspan="3">Tradutor</th>
                  <th>Edição</th>
                </tr>
                <tr className="literaryWorkI_list">
                  <td colspan="3">{literary.translator}</td>
                  <td>{literary.edition}</td>
                </tr>
                <tr className="literaryWorkI_title">
                  <th>Páginas</th>
                  <th>Ano</th>
                  <th colspan="2">Editora</th>
                </tr>
                <tr className="literaryWorkI_list">
                  <td>{literary.numberPage}</td>
                  <td>{literary.editionYear}</td>
                  <td colspan="2">{literary.publishingComp}</td>
                </tr>
                <tr className="literaryWorkI_title">
                  <th colspan="2">ISBN</th>
                  <th colspan="2">CDD</th>
                </tr>
                <tr className="literaryWorkI_list">
                  <td colspan="2">{literary.ISBN}</td>
                  <td colspan="2">{literary.CDD}</td>
                </tr>
                <tr className="literaryWorkI_title">
                  <th>CDU</th>
                  <th>Localidade</th>
                  <th colspan="2">Local de Publicação</th>
                </tr>
                <tr className="literaryWorkI_list">
                  <td>{literary.CDU}</td>
                  <td> { !!literary.locality_id ? `${literary.locality_id.hall} - ${literary.locality_id.bookcase} - ${literary.locality_id.shelf} ` : '' }</td>
                  <td colspan="2">{literary.publication}</td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>

      </div>
    </div>
  );
}

export default LiteraryWorksInfo;
