import React from 'react';
import autor from '../../../assets/images/icons/autores.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';
import { Link } from 'react-router-dom';

function AuthorsList() {

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
                <tr>
                  <th>K61n</th>
                  <th>Masashi Kishimoto</th>
                  <th>
                    <img src={editar} alt="editar" />
                    <img src={excluir} alt="excluir" />
                  </th>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AuthorsList;
