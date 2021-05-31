import React from 'react';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import editar from '../../../assets/images/icons/editar.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function StudentLoansList() {

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
                  <th>Livro</th>
                  <th>Devol.</th>
                  <th>Nº de renov.</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="loan_list">
                <tr>
                  <th>Memórias Póstumas de Brás Cubas</th>
                  <th>14/06/2021</th>
                  <th>2</th>
                  <th>
                    <img src={editar} alt="editar" />
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

export default StudentLoansList;
