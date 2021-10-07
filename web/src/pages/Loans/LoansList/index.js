import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import renovarImg from '../../../assets/images/icons/renovar.png'
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import { Menu } from '../../../components/Menu';
import { server } from './../../../common'
import './styles.css';

function LoansList() {

  const [emprestim, setEmprestim] = useState([])

  const loadEmprestimo = async () => {
    let emp = await axios.get(`${server}/loans`).then(e => e.data)
    setEmprestim(emp)
  }

  const renovar = (id) => {
    let confirmar = window.confirm('deseja realmente renovar?')
    if( confirmar ){
      axios.put(`${server}/loans/renovations/${id}`).then(_ => {
        alert('renovando o emprestimo', id)
      })
      .catch(e => alert('Nao foi possivel fazer a renovacao'))
    }
  }

  const apagar = (id) => {
    alert('Empréstimo excluido', id)
    axios.delete(`${server}/loans/${id}`)
      .then(_ => alert('Deletado com sucesso!'))
      .catch(e => alert('Erro ao deletar'))
  }

  useEffect(() => {
    loadEmprestimo()
    console.log(emprestim)
  }, [])

  return (
    <div id="loanContainer">
      <Menu />

      <div id="main">
        <div id="createLoans">
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
            <table className="loan_table">
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
                    <td>{emp.student_id}</td>
                    <td>{emp.literaryWorks_id}</td>
                    <td>{emp.returnDate}</td>
                    <td>{emp.loanDate}</td>
                    <td>
                      <img width={45} src={renovarImg} alt="renovar" onClick={() => renovar(emp.id)} />
                      <Link to={`/loansform/${emp.id}`}><img src={editar} alt="editar" /></Link>
                      <img src={excluir} alt="excluir" onClick={() => apagar(emp.id)} />
                    </td>
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
