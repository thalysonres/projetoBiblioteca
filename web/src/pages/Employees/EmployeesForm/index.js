import React from 'react';
import bookPP from '../../../assets/images/book-pp.svg';
import estudanteP from '../../../assets/images/icons/estudantes2.svg';
import estudantePP from '../../../assets/images/icons/estudantes.svg';
import autor from '../../../assets/images/icons/autores.svg';
import livro from '../../../assets/images/icons/livros2.svg';
import localidade from '../../../assets/images/icons/localidade.svg';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
import './styles.css';

function EmployeesForm() {
    
  return (
    <div id="container">
      <div id="menu">
        <div id="icon-menu">
          <img src={bookPP} alt="livro"/>
          <span>Biblioteca</span>
        </div>
        <div id="items-menu">
          <ul id="navigation">
            <li class="students">
              <img src={estudantePP} alt="estudantePP"/>
              <a href="#">Estudantes</a>
            </li>
            <li class="authors">
              <img src={autor} alt="autor"/>
              <a href="#">Autores</a>
            </li>
            <li class="books">
              <img src={livro} alt="livro"/>
              <a href="#">Livros</a>
            </li>
            <li class="localities">
              <img src={localidade} alt="localidade"/>
              <a href="#">Localidades</a>
            </li>
            <li class="loans">
              <img src={emprestimo} alt="empréstimo"/>
              <a href="#">Empréstimos</a>
            </li>
            <li class="employees">
              <img src={funcionario} alt="funcionário"/>
              <a href="#">Funcionários</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div id="main">
        <div id="create">
          <div id="new">
            <img src={estudanteP} alt="estudantes"/>
            <span>Estudantes</span>
          </div>
          <div id="new_button">
            <button>+</button>
          </div>
        </div>

        <div id="list">
          <section>
            <h2>Novo Usuário</h2>
            <form>
              <fieldset>
                <div>
                  <label for="name">Nome:</label>
                  <input type="text" name="name" id="name" placeholder="Digite o nome"/>
                </div>
                <div>
                  <label for="phone">Telefone:</label>
                  <input type="tel" name="phone" id="phone" placeholder="Digite o telefone" />
                  <label for="state">Estado:</label>
                  <input type="text" name="state" id="state" placeholder="Digite o estado" />
                </div>
                <div>
                  <label for="street">Rua:</label>
                  <input type="text" name="street" id="street" placeholder="Digite a rua" />
                </div>
                <div>
                  <label for="district">Bairro:</label>
                  <input type="text" name="district" id="district" placeholder="Digite o bairro" />
                </div>
                <div>
                  <label for="city">Cidade:</label>
                  <input type="text" name="city" id="city" placeholder="Digite a cidade" />
                </div>
                <div>
                  <label for="cpf">CPF:</label>
                  <input type="text" name="cpf" id="cpf" placeholder="Digite o CPF" />
                  <label className="birthDate" for="birthDate">Data de nascimento:</label>
                  <input type="date" name="birthDate" id="birthDate" />
                </div>
                <div>
                  <label for="pass">Senha:</label>
                  <input type="password" name="pass" id="pass" placeholder="Digite a senha" />
                </div>
                <div>
                  <label className="confirmPass" for="confirmPass">Confirmar senha:</label>
                  <input type="password" name="confirmPass" id="confirmPass" placeholder="Confirme a senha" />
                </div>
              </fieldset>
              <div id="student_input">
                <input className="confirm" type="submit" value="Cadastrar" />
                <input className="cancel" type="submit" value="Cancelar" />
              </div>
            </form>
          </section>
        </div>    

      </div>    
    </div>
  );
}

export default EmployeesForm;
