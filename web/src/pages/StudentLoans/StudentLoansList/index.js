import React from 'react';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import retorno from '../../../assets/images/icons/return.svg';
import editar from '../../../assets/images/icons/editar.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function StudentLoansList() {

  return (
    <div id="studentLContainer">
      <Menu />

      <div id="main">
        <div id="createStudentsL">
          <div id="new">
            <img src={emprestimo} alt="empréstimos" />
            <span>Empréstimos</span>
          </div>
          <div id="new_button">
            <button><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        <div id="studentL_list">
          <section className="studentL_allStudents">
            <table  className="studentL_table">
              <thead className="studentL_title">
                <tr>
                  <th>Livro</th>
                  <th>Devol.</th>
                  <th>Nº de renov.</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="studentL_list">
                <tr>
                  <td>Memórias Póstumas de Brás Cubas</td>
                  <td>14/06/2021</td>
                  <td>2</td>
                  <td>
                    <img src={editar} alt="editar" />
                  </td>
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
