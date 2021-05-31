import React from 'react';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function LoansForm() {

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

        <div id="loanF_list">
          <section>
            <h2>Novo Empréstimo</h2>
            <form>
              <fieldset>
                <div>
                  <label for="literaryWork">Livro:</label>
                  <input type="text" literaryWork="literaryWork" id="loanF_literaryWork" placeholder="Selecione o livro" />
                </div>
                <div>
                  <label for="student">Estudante:</label>
                  <input type="text" name="student" id="loanF_student" placeholder="Selecione o estudante" />
                </div>
                <div>
                  <label for="employee">Funcionário:</label>
                  <input type="text" name="employee" id="loanF_employee" placeholder="Selecione o funcionário" />
                </div>
                <div id="loanF_dates">
                  <label className="loanF_loanDate" for="loanDate">Data de empréstimo:</label>
                  <input type="date" name="loanDate" id="loanF_loanDate" />
                  <label className="loanF_returnDate" for="returnDate">Data de devolução:</label>
                  <input type="date" name="returnDate" id="loanF_returnDate" />
                </div>
              </fieldset>
              <div id="loanF_input">
                <input className="loanF_confirm" type="submit" value="Cadastrar" />
                <input className="loanF_cancel" type="submit" value="Cancelar" />
              </div>
            </form>
          </section>
        </div>

      </div>
    </div>
  );
}

export default LoansForm;
