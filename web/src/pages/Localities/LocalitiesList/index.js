import React from 'react';
import bookPP from '../../../assets/images/book-pp.svg';
import estudante from '../../../assets/images/icons/estudantes.svg';
import autor from '../../../assets/images/icons/autores.svg';
import livro from '../../../assets/images/icons/livros2.svg';
import localidade from '../../../assets/images/icons/localidade.svg';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';

function LocalitiesList() {
    
  return (
    <div id="container">
      <div id="menu">
        <div id="icon-menu">
          <img src={bookPP} alt="livro"/>
          <span>Biblioteca</span>
        </div>
        <div id="items-menu">
        <ul id="navigation">
            <li class="students">
              <img src={estudante} alt="estudante"/>
              <a href="/students">Estudantes</a>
            </li>
            <li class="authors">
              <img src={autor} alt="autor"/>
              <a href="/authors">Autores</a>
            </li>
            <li class="books">
              <img src={livro} alt="livro"/>
              <a href="#">Livros</a>
            </li>
            <li class="localities">
              <img src={localidade} alt="localidade"/>
              <a href="/localities">Localidades</a>
            </li>
            <li class="loans">
              <img src={emprestimo} alt="empréstimo"/>
              <a href="#">Empréstimos</a>
            </li>
            <li class="employees">
              <img src={funcionario} alt="funcionário"/>
              <a href="/employees">Funcionários</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="main">
        <div id="create">
          <div id="new">
            <img src={localidade} alt="localidades"/>
            <span>Localidades</span>
          </div>
          <div id="new_button">
            <button>+</button>
          </div>
        </div>

        <div id="locality_list">
          <section className="locality_allLocalities">
            <table cellSpacing={0}>
              <thead className="locality_title">
                <tr>
                  <th>Corredor</th>
                  <th>Estante</th>
                  <th>Prateleira</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="locality_list">
                <tr>
                  <th>01</th>
                  <th>01</th>
                  <th>AB</th>
                  <th>
                  <img src={editar} alt="editar"/>
                  <img src={excluir} alt="excluir"/>
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

export default LocalitiesList;
