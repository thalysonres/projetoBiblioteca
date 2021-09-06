import React, { useEffect, useState } from 'react';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';
import axios from 'axios';
import { server } from '../../../common';
import { Link, Redirect } from 'react-router-dom';

function EmployeesList() {

  const [employeeLoad, setEmployeeLoad] = useState([])

  const employee_load = async () => {
    let employee = await axios.get(`${server}/employees`).then(e => e.data)
    setEmployeeLoad(employee)
  }

  const deletar = (id) => {
    let resultado = window.confirm('Deseja deletar?')
    if (resultado) {
      axios.delete(`${server}/employees/${id}`).then(_ => alert('Deletado com sucesso!'))
        .catch(e => alert('Algo de errado!'))
    }
  }

  const mask = (cpf) => cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11)

  useEffect(() => {
    employee_load()
  })

  return (
    <div id="container">
      <Menu />
      <div id="main">
        <div id="createEmployees">
          <div id="new">
            <img src={funcionario} alt="funcionários" />
            <span>Funcionários</span>
          </div>
          <div id="new_button">
            <Link className="button" to="/employeesform">+</Link>
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
                {employeeLoad.map(emp =>
                  <tr>
                    <th>{mask(emp.cpf)}</th>
                    <th>{emp.name}</th>
                    <th>
                      <Link to={`/employeesform/${emp.id}`}><img src={editar} alt="editar" /></Link>
                      <img src={excluir} alt="excluir" onClick={() => deletar(emp.id)} />
                    </th>
                  </tr>
                )}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default EmployeesList;
