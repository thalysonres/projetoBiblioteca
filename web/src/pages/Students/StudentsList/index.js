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

function StudentsList() {
    
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
              <img src={estudante} alt="estudantePP"/>
              <a href="#">Estudantes</a>
            </li>
            <li class="authors">
              <img src={autor} alt="autor"/>
              <a href="#">Autores</a>
            </li>
            <li class="books">
              <img src={livro} alt="livro"/>
              <a href="#">Livros</a>
            </li>
            <li class="localities">
              <img src={localidade} alt="localidade"/>
              <a href="#">Localidades</a>
            </li>
            <li class="loans">
              <img src={emprestimo} alt="empréstimo"/>
              <a href="#">Empréstimos</a>
            </li>
            <li class="employees">
              <img src={funcionario} alt="funcionário"/>
              <a href="#">Funcionários</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="main">
        <div id="create">
          <div id="new">
            <img src={estudante} alt="estudantes"/>
            <span>Estudantes</span>
          </div>
          <div id="new_button">
            <button>+</button>
          </div>
        </div>

        <div id="student_list">
          <section className="student_allStudents">
            <table cellSpacing={0}>
              <thead className="student_title">
                <tr>
                  <th>CPF</th>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="student_list">
                <tr>
                  <th>999.999.999-99</th>
                  <th>Wilian Rodrigues Santos</th>
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

export default StudentsList;
