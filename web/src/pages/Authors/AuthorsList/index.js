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

function AuthorsList() {
    
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
            <img src={autor} alt="autores"/>
            <span>Autores</span>
          </div>
          <div id="new_button">
            <button>+</button>
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

export default AuthorsList;
