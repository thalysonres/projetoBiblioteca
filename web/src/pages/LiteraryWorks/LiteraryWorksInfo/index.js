import React from 'react';
import livro from '../../../assets/images/icons/livros2.svg';
import retorno from '../../../assets/images/icons/return.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function LiteraryWorksInfo() {

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
            <h2>Título do livro</h2>
            <table>
              <tbody>
                <tr className="literaryWorkI_title">
                  <th className="capa">Capa do livro</th>
                  <th colspan="4">Autor</th>
                </tr>
                <tr className="literaryWorkI_list">
                  <td rowspan="9">Capa do livro</td>
                  <td colspan="4">Nome do autor</td>
                </tr>
                <tr className="literaryWorkI_title">
                  <th colspan="3">Tradutor</th>
                  <th>Edição</th>
                </tr>
                <tr className="literaryWorkI_list">
                  <td colspan="3">Tradutor</td>
                  <td>Nº</td>
                </tr>
                <tr className="literaryWorkI_title">
                  <th>Páginas</th>
                  <th>Ano</th>
                  <th colspan="2">Editora</th>
                </tr>
                <tr className="literaryWorkI_list">
                  <td>14</td>
                  <td>2014</td>
                  <td colspan="2">Panini</td>
                </tr>
                <tr className="literaryWorkI_title">
                  <th colspan="2">ISBN</th>
                  <th colspan="2">CDD</th>
                </tr>
                <tr className="literaryWorkI_list">
                  <td colspan="2">ISBN</td>
                  <td colspan="2">CDD</td>
                </tr>
                <tr className="literaryWorkI_title">
                  <th>CDU</th>
                  <th>Localidade</th>
                  <th colspan="2">Local de Publicação</th>
                </tr>
                <tr className="literaryWorkI_list">
                  <td>CDU</td>
                  <td>Localidade</td>
                  <td colspan="2">Local de Publicação</td>
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
