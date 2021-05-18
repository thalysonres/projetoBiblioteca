import React from 'react';
import bookPP from '../../../assets/images/book-pp.svg';
import estudanteP from '../../../assets/images/icons/estudantes2.svg';
import estudantePP from '../../../assets/images/icons/estudantes.svg';
import autor from '../../../assets/images/icons/autores.svg';
import livro from '../../../assets/images/icons/livros2.svg';
import localidade from '../../../assets/images/icons/localidade.svg';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';

function StudentList() {
    
  return (
    <div id="container">
      <div id="menu">
        <div id="icon-menu">
          <img src={bookPP} alt="livro"/>
          <span>Biblioteca</span>
        </div>
        <div id="items-menu">
          <ul id="navigation">
            <li class="students"><a href="#">
              <img src={estudantePP} alt="estudantePP"/>Estudantes</a>
            </li>
            <li class="authors"><a href="#">
              <img src={autor} alt="autor"/>Autores</a>
            </li>
            <li class="books"><a href="#">
              <img src={livro} alt="livro"/>Livros</a>
            </li>
            <li class="localities"><a href="#">
              <img src={localidade} alt="localidade"/>Localidades</a>
            </li>
            <li class="loans"><a href="#">
              <img src={emprestimo} alt="empréstimo"/>Empréstimos</a>
            </li>
            <li class="employees"><a href="#">
              <img src={funcionario} alt="funcionário"/>Funcionários</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="main">
        <div id="create">
          <div id="new">
            <img src={estudanteP} alt="estudantes"/>
            <span>Estudantes</span>
          </div>
          
        </div>
        <div id="list">
          <section className="allStudents">
            <table cellSpacing={0}>
              <thead>
                <tr className="title">
                  <th>CPF</th>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
              <tr className="list">
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

export default StudentList;
