import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import axios from 'axios';
import retorno from '../../../assets/images/icons/return.svg';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
import { Menu } from '../../../components/Menu';
import { server } from '../../../common';
import './styles.css';

function EmployeesForm(props) {

  const [nome, setNome] = useState()
  const [telefone, setTelefone] = useState()
  const [estado, setEstado] = useState()
  const [rua, setRua] = useState()
  const [bairro, setBairro] = useState()
  const [cidade, setCidade] = useState()
  const [cpf, setCpf] = useState()
  const [niver, setNiver] = useState()
  const [senha, setSenha] = useState()
  const [senhaConf, setSenhaConf] = useState()
  const [carregado, setCarregado] = useState(false)
  const [redirect, setRedirect] = useState()

  let params = props.match.params.id

  const load = () => {
    if (params != undefined) {
      if (!carregado) {
        axios.get(`${server}/employees/${params}`).then(emp1 => {
          let emp = emp1.data

          setNome(emp.name)
          setTelefone(emp.phone)
          setEstado(emp.state)
          setRua(emp.street)
          setBairro(emp.district)
          setCidade(emp.city)
          setCpf(emp.cpf)
          setNiver(emp.birthDate)
          setSenha(emp.pass)
          setSenhaConf(emp.pass)

          setCarregado(true)
        })
      }
    }
  }

  const cadastrar = (e) => {
    e.preventDefault()

    if( !nome ) return alert('Preencha o campo nome')
    if( !telefone ) return alert('Preencha o campo telefone')
    if( !estado ) return alert('Preencha o campo estado')
    if( !rua ) return alert('Preencha o campo rua')
    if( !bairro ) return alert('Preencha o campo bairro')
    if( !cidade ) return alert('Preencha o campo cidade')
    if( !cpf ) return alert('Preencha o campo cpf')

    if ( String(cpf).length != 11 ) {
      return alert('CPF não tem 11 dígitos')
    }

    if( !niver ) return alert('Preencha o campo data de nascimento')
    if( !senha ) return alert('Preencha o campo senha')
    if( !senhaConf ) return alert('Preencha o campo confirmar senha')
    
    if( String(senha).length < 8){
      return alert('A senha não pode conter menos de 8 caracteres')
    }

    if (senha != senhaConf) {
      alert('Senhas não conferem')
      console.log(senhaConf, senha)
      return
    }
    if (params != undefined) {
      // alert('Atualizar')
      axios.put(`${server}/employees/${params}`, {
        name: nome,
        phone: telefone,
        street: rua,
        district: bairro,
        city: cidade,
        state: estado,
        cpf: cpf,
        pass: senha,
        birthDate: niver
      }).then(_ => {
        alert('Salvo com sucesso')
        setRedirect(true)
      })
        .catch(e => alert('Erro ao atualizar cadastro'))
    }
    else {
      // alert('Cadastrar')
      axios.post(`${server}/employees`, {
        name: nome,
        phone: telefone,
        street: rua,
        district: bairro,
        city: cidade,
        state: estado,
        cpf: cpf,
        pass: senha,
        birthDate: niver
      }).then(_ => {
        alert('Salvo com sucesso')
        setRedirect(true)
      })
        .catch(e => alert('Erro ao cadastrar'))
    }
  }

  useEffect(() => {
    load()
  })

  return (
    <div id="employeeFContainer">
      <Menu />

      <div id="main">
        <div id="createEmployeesF">
          <div id="new">
            <img src={funcionario} alt="funcionários" />
            <span>Funcionários</span>
          </div>
          <div id="new_button">
            <button><img src={retorno} alt="retorno" onClick={() => setRedirect(true)} /></button>
          </div>
        </div>

        <div id="employeeF_list">
          <section>
            {!params ? <h2>Novo Funcionário</h2> : <h2>Alterar Funcionário</h2>}
            <form>
              <fieldset>
                <div>
                  <label for="name">Nome:</label>
                  <input type="text" name="name" id="employeeF_name" value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite o nome" />
                </div>
                <div>
                  <label for="phone">Telefone:</label>
                  <input type="tel" name="phone" id="employeeF_phone" value={telefone} onChange={e => setTelefone(e.target.value)} placeholder="Digite o telefone" />
                  <label for="state">Estado:</label>
                  {/* <input type="text" name="state" id="employeeF_state" value={estado} onChange={e => setEstado(e.target.value)} placeholder="Digite o estado" /> */}
                    <select name="state" id="employeeF_state" value={estado} onChange={e => setEstado(e.target.value)} style={{height: 36}}>
                        <option value="AC">Acre</option>
                        <option value="AL">Alagoas</option>
                        <option value="AP">Amapá</option>
                        <option value="AM">Amazonas</option>
                        <option value="BA">Bahia</option>
                        <option value="CE">Ceará</option>
                        <option value="DF">Distrito Federal</option>
                        <option value="ES">Espírito Santo</option>
                        <option value="GO">Goiás</option>
                        <option value="MA">Maranhão</option>
                        <option value="MT">Mato Grosso</option>
                        <option value="MS">Mato Grosso do Sul</option>
                        <option value="MG">Minas Gerais</option>
                        <option value="PA">Pará</option>
                        <option value="PB">Paraíba</option>
                        <option value="PR">Paraná</option>
                        <option value="PE">Pernambuco</option>
                        <option value="PI">Piauí</option>
                        <option value="RJ">Rio de Janeiro</option>
                        <option value="RN">Rio Grande do Norte</option>
                        <option value="RS">Rio Grande do Sul</option>
                        <option value="RO">Rondônia</option>
                        <option value="RR">Roraima</option>
                        <option value="SC">Santa Catarina</option>
                        <option value="SP">São Paulo</option>
                        <option value="SE">Sergipe</option>
                        <option value="TO">Tocantins</option>
                      </select>
                
                </div>
                <div>
                  <label for="street">Rua:</label>
                  <input type="text" name="street" id="employeeF_street" value={rua} onChange={e => setRua(e.target.value)} placeholder="Digite a rua" />
                </div>
                <div>
                  <label for="district">Bairro:</label>
                  <input type="text" name="district" id="employeeF_district" value={bairro} onChange={e => setBairro(e.target.value)} placeholder="Digite o bairro" />
                </div>
                <div>
                  <label for="city">Cidade:</label>
                  <input type="text" name="city" id="employeeF_city" value={cidade} onChange={e => setCidade(e.target.value)} placeholder="Digite a cidade" />
                </div>
                <div>
                  <label for="cpf">CPF:</label>
                  <input type="text" name="cpf" id="employeeF_cpf" value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite o CPF" />
                  <label className="employeeF_birthDate" for="birthDate">Data de nascimento:</label>
                  <input type="date" name="birthDate" value={niver} onChange={e => setNiver(e.target.value)} id="employeeF_birthDate" />
                </div>
                <div>
                  <label for="pass">Senha:</label>
                  <input type="password" name="pass" id="employeeF_pass" value={senha} onChange={e => setSenha(e.target.value)} placeholder="Digite a senha" />
                </div>
                <div>
                  <label className="employeeF_confirmPass" for="confirmPass">Confirmar senha:</label>
                  <input type="password" name="confirmPass" value={senhaConf} onChange={e => setSenhaConf(e.target.value)} id="employeeF_confirmPass" placeholder="Confirme a senha" />
                </div>
              </fieldset>
              <div id="employeeF_input">
                <input className="employeeF_confirm" type="submit" value={ !params ? "Cadastrar" : 'Atualizar' } onClick={e => cadastrar(e)} />
                <input className="employeeF_cancel" type="submit" value="Cancelar" onClick={() => setRedirect(true)} />
              </div>
            </form>
          </section>
        </div>
        {redirect && <Redirect to="/employees" />}
      </div>
    </div>
  );
}

export default EmployeesForm;
