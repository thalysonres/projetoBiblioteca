import React from 'react';
import livro from '../../../assets/images/icons/livros2.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function LiteraryWorksList() {

  return (
    <div id="container">
      <Menu />

      <div id="main">
        <div id="create">
          <div id="new">
            <img src={livro} alt="livros" />
            <span>Livros</span>
          </div>
          <div id="new_button">
            <button>+</button>
          </div>
        </div>

        <div id="literaryWork_list">
          <section className="literaryWork_allLiteraryWorks">
            <table cellSpacing={0}>
              <thead className="literaryWork_title">
                <tr>
                  <th>Livro</th>
                  <th>Autor</th>
                  <th>Dispon.</th>
                  <th>Local</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="literaryWork_list">
                <tr>
                  <th>Memórias Póstumas de Brás Cubas</th>
                  <th>Machado de Assis</th>
                  <th>5</th>
                  <th>01-01-AC</th>
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

export default LiteraryWorksList;
