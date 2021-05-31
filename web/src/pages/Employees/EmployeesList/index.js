import React from 'react';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function EmployeesList() {

  return (
    <div id="container">
      <Menu />
      <div id="main">
        <div id="create">
          <div id="new">
            <img src={funcionario} alt="funcionários" />
            <span>Funcionários</span>
          </div>
          <div id="new_button">
            <button>+</button>
          </div>
        </div>

        <div id="employee_list">
          <section className="employee_allEmployees">
            <table cellSpacing={0}>
              <thead className="employee_title">
                <tr>
                  <th>CPF</th>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="employee_list">
                <tr>
                  <th>999.999.999-99</th>
                  <th>Wilian Rodrigues Santos</th>
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

export default EmployeesList;
