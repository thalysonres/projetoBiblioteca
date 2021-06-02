import React from 'react';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
import retorno from '../../../assets/images/icons/return.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function EmployeesForm() {

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
            <button><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        <div id="employeeF_list">
          <section>
            <h2>Novo Usuário</h2>
            <form>
              <fieldset>
                <div>
                  <label for="name">Nome:</label>
                  <input type="text" name="name" id="employeeF_name" placeholder="Digite o nome" />
                </div>
                <div>
                  <label for="phone">Telefone:</label>
                  <input type="tel" name="phone" id="employeeF_phone" placeholder="Digite o telefone" />
                  <label for="state">Estado:</label>
                  <input type="text" name="state" id="employeeF_state" placeholder="Digite o estado" />
                </div>
                <div>
                  <label for="street">Rua:</label>
                  <input type="text" name="street" id="employeeF_street" placeholder="Digite a rua" />
                </div>
                <div>
                  <label for="district">Bairro:</label>
                  <input type="text" name="district" id="employeeF_district" placeholder="Digite o bairro" />
                </div>
                <div>
                  <label for="city">Cidade:</label>
                  <input type="text" name="city" id="employeeF_city" placeholder="Digite a cidade" />
                </div>
                <div>
                  <label for="cpf">CPF:</label>
                  <input type="text" name="cpf" id="employeeF_cpf" placeholder="Digite o CPF" />
                  <label className="employeeF_birthDate" for="birthDate">Data de nascimento:</label>
                  <input type="date" name="birthDate" id="employeeF_birthDate" />
                </div>
                <div>
                  <label for="pass">Senha:</label>
                  <input type="password" name="pass" id="employeeF_pass" placeholder="Digite a senha" />
                </div>
                <div>
                  <label className="employeeF_confirmPass" for="confirmPass">Confirmar senha:</label>
                  <input type="password" name="confirmPass" id="employeeF_confirmPass" placeholder="Confirme a senha" />
                </div>
              </fieldset>
              <div id="employeeF_input">
                <input className="employeeF_confirm" type="submit" value="Cadastrar" />
                <input className="employeeF_cancel" type="submit" value="Cancelar" />
              </div>
            </form>
          </section>
        </div>

      </div>
    </div>
  );
}

export default EmployeesForm;
