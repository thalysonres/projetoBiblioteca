import React from 'react';
import bookPP from '../../../assets/images/book-pp.svg';
import estudanteP from '../../../assets/images/icons/estudantes2.svg';
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
            <li class="students"><a href="#">Estudantes</a></li>
            <li class="authors"><a href="#">Autores</a></li>
            <li class="books"><a href="#">Livros</a></li>
            <li class="localities"><a href="#">Localidades</a></li>
            <li class="loans"><a href="#">Empréstimos</a></li>
            <li class="employees"><a href="#">Funcionários</a></li>
          </ul>
        </div>
      </div>
      <div id="main">
        <div id="create">
          <img src={estudanteP} alt="estudantes"/>
          <span>Estudantes</span>
        </div>
        <div id="list">
          <section class="allStudents">
            <table cellSpacing={0}>
              <thead>
                <tr>
                  <th>CPF</th>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <th>999.999.999-99</th>
                  <th>Uai Uai Uai</th>
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
