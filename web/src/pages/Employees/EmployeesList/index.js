import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
import { Menu } from '../../../components/Menu';
import { server } from '../../../common';
import './styles.css';

function EmployeesList() {

  const [employeeLoad, setEmployeeLoad] = useState([])

  const employee_load = async () => {
    let employee = await axios.get(`${server}/employees`).then(e => e.data)
    setEmployeeLoad(employee)
  }

  const deletar = (id) => {
    let resultado = window.confirm('Deseja excluir?')
    if (resultado) {
      axios.delete(`${server}/employees/${id}`).then(_ => alert('Excluido com sucesso'))
        .catch(e => alert('Erro ao excluir'))
    }
  }

  const mask = (cpf) => cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11)

  useEffect(() => {
    employee_load()
  })

  return (
    <div id="employeeContainer">
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
            <table className="employee_table">
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
                    <td>{mask(emp.cpf)}</td>
                    <td>{emp.name}</td>
                    <td>
                      <Link to={`/employeesform/${emp.id}`}><img src={editar} alt="editar" /></Link>
                      <img src={excluir} alt="excluir" onClick={() => deletar(emp.id)} />
                    </td>
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
