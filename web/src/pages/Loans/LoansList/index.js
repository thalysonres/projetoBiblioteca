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
import { Menu } from '../../../components/Menu';

function LoansList() {

  return (
    <div id="container">
      <Menu />

      <div id="main">
        <div id="create">
          <div id="new">
            <img src={emprestimo} alt="empréstimos" />
            <span>Empréstimos</span>
          </div>
          <div id="new_button">
            <button>+</button>
          </div>
        </div>

        <div id="loan_list">
          <section className="loan_allLoans">
            <table cellSpacing={0}>
              <thead className="loan_title">
                <tr>
                  <th>Estudante</th>
                  <th>Livro</th>
                  <th>Devol.</th>
                  <th>Renov.</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="loan_list">
                <tr>
                  <th>Wilian Rodrigues Santos</th>
                  <th>Memórias Póstumas de Brás Cubas</th>
                  <th>14/06/2021</th>
                  <th>2</th>
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

export default LoansList;
