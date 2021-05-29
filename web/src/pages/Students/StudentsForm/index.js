import React, { useState } from 'react';
import estudante from '../../../assets/images/icons/estudantes.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';
import axios from 'axios';
import { server } from '../../../common';
import { Redirect } from 'react-router-dom';

let umaVez = 0

function StudentsForm(props) {
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [street, setStreet] = useState()
  const [district, setDistrict] = useState()
  const [city, setCity] = useState()
  const [state, setState] = useState()
  const [cpf, setCpf] = useState()
  const [pass, setPass] = useState()
  const [passConfirm, setPassConfirm] = useState()
  const [birthDate, setBirthDate] = useState()
  const [redirect, setRedirect] = useState(false)

  const params = props.match.params.id

  const formData = (data) => {
    // let dat = data.split('-')
    // return `${dat[2]}-${dat[1]}-${dat[0]}`
    return data
  }

  const cadastrar = (e) => {
    e.preventDefault()



    if (params != undefined) {
      alert('Update')
      axios.put(`${server}/students/${params}`, {
        name: name,
        phone: phone,
        street: street,
        district: district,
        city: city,
        state: state,
        cpf: cpf,
        pass: pass,
      }).then(_ => {
        alert('User alterado');
        umaVez = 0;
        setRedirect(true)
        // window.location = '/students'
      })
        .catch(e => alert('Ou não algo deu errado!!!'))
    } else {

      alert('Cadastrar')
      if (pass != passConfirm) {
        return alert('Senhas não confere')
      }

      axios.post(`${server}/students`, {
        name: name,
        phone: phone,
        street: street,
        district: district,
        city: city,
        state: state,
        cpf: cpf,
        pass: pass,
        birthDate: birthDate
      }).then(_ => {
        alert('Novo usuario cadastrado')
        umaVez = 0;
        setRedirect(true)
      })
        .catch(e => alert('Ou não algo deu errado!!!'))

    }

  }
  const cancelar = (e) => {
    e.preventDefault()
    umaVez = 0;
    setRedirect(true)
  }

  const edit = () => {
    if (umaVez != 0) return
    if (params != undefined) {
      axios.get(`${server}/students/${params}`).then(studentOne => {
        console.log('CHAMADO....')
        const student = studentOne.data
        setName(student.name)
        setPhone(student.phone)
        setStreet(student.street)
        setDistrict(student.district)
        setCity(student.city)
        setState(student.state)
        setCpf(student.cpf)
        setPass(student.pass)
        setBirthDate(student.birthDate)
      }).then(_ => umaVez = 1)
    }
  }

  edit()

  return (
    <div id="container">
      {console.log(' Uma vez ', umaVez, params)}
      <Menu />

      <div id="main">
        <div id="create">
          <div id="new">
            <img src={estudante} alt="estudantes" />
            <span>Estudantes</span>
          </div>
          <div id="new_button">
            <button>+</button>
          </div>
        </div>

        <div id="studentF_list">
          <section>
            <h2>Novo Usuário</h2>
            <form>
              <fieldset>
                <div>
                  <label for="name">Nome:</label>
                  <input type="text" name="name" id="studentF_name" placeholder="Digite o nome" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                  <label for="phone">Telefone:</label>
                  <input type="tel" name="phone" id="studentF_phone" placeholder="Digite o telefone" value={phone} onChange={e => setPhone(e.target.value)} />
                  <label for="state">Estado:</label>
                  <input type="text" name="state" id="studentF_state" placeholder="Digite o estado" value={state} onChange={e => setState(e.target.value)} />
                </div>
                <div>
                  <label for="street">Rua:</label>
                  <input type="text" name="street" id="studentF_street" placeholder="Digite a rua" value={street} onChange={e => setStreet(e.target.value)} />
                </div>
                <div>
                  <label for="district">Bairro:</label>
                  <input type="text" name="district" id="studentF_district" placeholder="Digite o bairro" value={district} onChange={e => setDistrict(e.target.value)} />
                </div>
                <div>
                  <label for="city">Cidade:</label>
                  <input type="text" name="city" id="studentF_city" placeholder="Digite a cidade" value={city} onChange={e => setCity(e.target.value)} />
                </div>
                <div>
                  <label for="cpf">CPF:</label>
                  <input type="text" name="cpf" id="studentF_cpf" placeholder="Digite o CPF" value={cpf} onChange={e => setCpf(e.target.value)} />
                  <label className="studentF_birthDate" for="birthDate">Data de nascimento:</label>
                  <input type="date" name="birthDate" id="studentF_birthDate" value={birthDate} onChange={e => setBirthDate(`${e.target.value}`)} />
                  {console.log('niver ====>', birthDate)}
                </div>
                <div>
                  <label for="pass">Senha:</label>
                  <input type="password" name="pass" id="studentF_pass" placeholder="Digite a senha" value={pass} onChange={e => setPass(e.target.value)} />
                </div>
                <div>
                  <label className="studentF_confirmPass" for="confirmPass">Confirmar senha:</label>
                  <input type="password" name="confirmPass" id="studentF_confirmPass" placeholder="Confirme a senha" value={passConfirm} onChange={e => setPassConfirm(e.target.value)} />
                </div>
              </fieldset>
              <div id="studentF_input">
                <input className="studentF_confirm" type="submit" value="Cadastrar" onClick={e => cadastrar(e)} />
                <input className="studentF_cancel" type="submit" value="Cancelar" onClick={e => cancelar(e)} />
              </div>
            </form>
          </section>
        </div>
        {redirect && <Redirect to="/students" />}
      </div>
    </div>
  );
}

export default StudentsForm;
