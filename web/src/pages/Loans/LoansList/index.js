import React, { useEffect, useState } from 'react';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';
import axios from 'axios';
import { server } from './../../../common'
import { Link } from 'react-router-dom';

function LoansList() {

  const [emprestim, setEmprestim] = useState([])

  const loadEmprestimo = async () => {
    let emp = await axios.get(`${server}/loans`).then(e => e.data)
    setEmprestim(emp)
  }

  const apagar = (id) => {
    alert('apagou kkk', id)
    axios.delete(`${server}/loans/${id}`)
      .then(_ => alert('Deletado com sucesso!!!'))
      .catch(e => alert('Algo deu errado!!!'))
  }

  useEffect(() => {
    loadEmprestimo()
    console.log(emprestim)
  })

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
            <Link to={'/loansform'} className="button">+</Link>
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
                {emprestim.map(emp => (
                  <tr key={emp.id}>
                    <th>{emp.student_id}</th>
                    <th>{emp.literaryWorks_id}</th>
                    <th>{emp.returnDate}</th>
                    <th>{emp.loanDate}</th>
                    <th>
                      <Link to={`/loansform/${emp.id}`}><img src={editar} alt="editar" /></Link>
                      <img src={excluir} alt="excluir" onClick={() => apagar(emp.id)} />
                    </th>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LoansList;
