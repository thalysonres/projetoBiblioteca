import React from 'react';
import bookPP from '../../../assets/images/book-pp.svg';
import estudante from '../../../assets/images/icons/estudantes.svg';
import autor from '../../../assets/images/icons/autores.svg';
import livro from '../../../assets/images/icons/livros2.svg';
import localidade from '../../../assets/images/icons/localidade.svg';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
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

        <div id="studentF_list">
          <section>
            <h2>Novo Empréstimo</h2>
            <form>
              <fieldset>
                <div>
                  <label for="name">Nome:</label>
                  <input type="text" name="name" id="studentF_name" placeholder="Digite o nome" />
                </div>
                <div>
                  <label for="phone">Telefone:</label>
                  <input type="tel" name="phone" id="studentF_phone" placeholder="Digite o telefone" />
                  <label for="state">Estado:</label>
                  <input type="text" name="state" id="studentF_state" placeholder="Digite o estado" />
                </div>
                <div>
                  <label for="street">Rua:</label>
                  <input type="text" name="street" id="studentF_street" placeholder="Digite a rua" />
                </div>
                <div>
                  <label for="district">Bairro:</label>
                  <input type="text" name="district" id="studentF_district" placeholder="Digite o bairro" />
                </div>
                <div>
                  <label for="city">Cidade:</label>
                  <input type="text" name="city" id="studentF_city" placeholder="Digite a cidade" />
                </div>
                <div>
                  <label for="cpf">CPF:</label>
                  <input type="text" name="cpf" id="studentF_cpf" placeholder="Digite o CPF" />
                  <label className="studentF_birthDate" for="birthDate">Data de nascimento:</label>
                  <input type="date" name="birthDate" id="studentF_birthDate" />
                </div>
                <div>
                  <label for="pass">Senha:</label>
                  <input type="password" name="pass" id="studentF_pass" placeholder="Digite a senha" />
                </div>
                <div>
                  <label className="studentF_confirmPass" for="confirmPass">Confirmar senha:</label>
                  <input type="password" name="confirmPass" id="studentF_confirmPass" placeholder="Confirme a senha" />
                </div>
              </fieldset>
              <div id="studentF_input">
                <input className="studentF_confirm" type="submit" value="Cadastrar" />
                <input className="studentF_cancel" type="submit" value="Cancelar" />
              </div>
            </form>
          </section>
        </div>

      </div>
    </div>
  );
}

export default LoansForm;
