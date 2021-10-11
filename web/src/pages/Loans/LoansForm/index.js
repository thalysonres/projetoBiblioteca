import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import retorno from '../../../assets/images/icons/return.svg';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import { Menu } from '../../../components/Menu';
import { server } from '../../../common';
import './styles.css';

function LoansForm(props) {

  const [literaryWork, setLiteraryWork] = useState()
  const [student, setStudent] = useState()
  const [employee, setEmployee] = useState()
  const [loanDate, setLoanDate] = useState()
  const [returnDate, setReturnDate] = useState()
  const [redirect, setRedirect] = useState(false)
  const [carregar, setCarregar] = useState(true)

  const params = props.match.params.id

  const load = () => {
    if (params != undefined && carregar) {
      axios.get(`${server}/loans/${params}`).then(res => {
        let loans = res.data
        setLiteraryWork(loans.literaryWorks_id)
        setStudent(loans.student_id)
        setEmployee(loans.employees_id)
        setLoanDate(loans.loanDate)
        setReturnDate(loans.returnDate)
        setCarregar(false)
      })

    }
  }

  const cadastrar = (e) => {
    e.preventDefault()

    if (params != undefined) {
      alert('Atualizar')
      axios.put(`${server}/loans/${params}`, {
        literaryWork, student, employee,
        loanDate, returnDate
      })
        .then(m => {
          alert('Salvo com sucesso!')
          setRedirect(true)
        })
        .catch(e => {
          console.log(e)
          alert(`Erro ao atualizar cadastro: ${e.response.data.message}`)
        })
    }

    else {
      axios.post(`${server}/loans`, {
        literaryWorks_id: literaryWork,
        student_id: student,
        employees_id: employee,
        loanDate: loanDate,
        returnDate: returnDate
      }).then(() => {
        alert('Salva com sucesso!')
        setRedirect(true)
      }).catch(e => {
        alert(`Erro ao cadastrar: ${e.response.data.message}`)
      })
    }

    console.log(literaryWork, student, employee,
      loanDate, returnDate)
  }

  const cancelar = (e) => {
    e.preventDefault()
    setRedirect(true)
  }

  useEffect(() => {
    load()
  })

  return (
    <div id="loanFContainer">
      <Menu />

      <div id="main">
        <div id="createLoansF">
          <div id="new">
            <img src={emprestimo} alt="empréstimos" />
            <span>Empréstimos</span>
          </div>
          <div id="new_button">
            <button onClick={() => setRedirect(true)}><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        <div id="loanF_list">
          <section>
            {!params ? <h2>Novo Empréstimo</h2> : <h2>Alterar Empréstimo</h2>}
            <form>
              <fieldset>
                <div>
                  <label for="literaryWork">Livro:</label>
                  <select type="text" literaryWork="literaryWork" value={literaryWork} onChange={e => setLiteraryWork(e.target.value)} id="loanF_literaryWork" placeholder="Selecione o livro" />
                </div>
                <div>
                  <label for="student">Estudante:</label>
                  <select type="text" name="student" id="loanF_student" value={student} onChange={e => setStudent(e.target.value)} placeholder="Selecione o estudante" />
                </div>
                <div>
                  <label for="employee">Funcionário:</label>
                  <input type="text" name="employee" disabled value={employee} onChange={e => setEmployee(e.target.value)} id="loanF_employee" placeholder="Selecione o funcionário" />
                </div>
                <div id="loanF_dates">
                  <label className="loanF_loanDate" for="loanDate">Data de empréstimo:</label>
                  <input type="date" name="loanDate" value={loanDate} onChange={e => setLoanDate(e.target.value)} id="loanF_loanDate" />
                  <label className="loanF_returnDate" for="returnDate">Data de devolução:</label>
                  <input type="date" name="returnDate" value={returnDate} onChange={e => setReturnDate(e.target.value)} id="loanF_returnDate" />
                </div>
              </fieldset>
              <div id="loanF_input">
                <input className="loanF_confirm" type="submit" value="Cadastrar" onClick={e => cadastrar(e)} />
                <input className="loanF_cancel" type="submit" value="Cancelar" onClick={e => cancelar(e)} />
              </div>
            </form>
          </section>
        </div>
        {redirect && <Redirect to={'/loans'} />}
      </div>
    </div>
  );
}

export default LoansForm;
