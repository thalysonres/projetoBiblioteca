import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Menu } from '../../../components/Menu';
import { server } from '../../../common';
import { Loading } from '../../../components/Loading';
import { cadastrarUpdate, cpfMask } from '../../../utils';
import estudante from '../../../assets/images/icons/estudantes.svg';
import retorno from '../../../assets/images/icons/return.svg';
import './styles.css';

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
  const [editA, setEditA] = useState(false)
  const [loading, setLoading] = useState(true)
  const [mudouSenha, setMudouSenha] = useState(false)

  const params = props.match.params.id

  const formData = (data) => {
    // let dat = data.split('-')
    // return `${dat[2]}-${dat[1]}-${dat[0]}`
    return data
  }

  const tiraPontos = (cpf) => {
    cpf = cpf.replaceAll('.', '')
    cpf = cpf.replace('-', '')
    return cpf
  }

  const cadastrar = (e) => {
    e.preventDefault()

    

    if( !name ) return alert('Preencha o campo nome')
    if( !phone ) return alert('Preencha o campo telefone')
    if( !street ) return alert('Preencha o campo rua')
    if( !district ) return alert('Preencha o campo bairro')
    if( !city ) return alert('Preencha o campo cidade')
    if( !state ) return alert('Preencha o campo estado')
    if( !cpf ) return alert('Preencha o campo cpf')
    if( !pass ) return alert('Preencha o campo senha')
    if( !passConfirm ) return alert('Preencha o campo confirmar senha')
    if( !birthDate ) return alert('Preencha o campo data de nascimento')

    if( String(pass).length < 8){
      return alert('A senha não pode conter menos de 8 caracteres')
    }
    
    if( mudouSenha ){
      if (params != undefined) {
        // setLoading(false)
        axios.put(`${server}/students/${params}`, {
          name: name,
          phone: phone,
          street: street,
          district: district,
          city: city,
          state: state,
          cpf: tiraPontos( cpf ),
          pass: pass,
        }).then(_ => {
          alert('User alterado');
          setEditA(false)
          setRedirect(true)
          // setLoading(true)

          // window.location = '/students'
        })
          .catch(e => alert('Erro ao atualizar cadastro'))
      } else {
        // setLoading(false)

        // alert('Cadastrar')
        if (pass != passConfirm) {
          return alert('Senhas não conferem')
        }

        let cpfvalida = tiraPontos( cpf )
        if ( String( cpfvalida ).length != 11 ) {
          return alert(`CPF não tem 11 dígitos => ${cpfvalida}`)
        }

        axios.post(`${server}/students`, {
          name,
          phone,
          street,
          district,
          city,
          state,
          cpf: tiraPontos( cpf ),
          pass,
          birthDate
        }).then(_ => {
          alert('Novo usuário cadastrado')
          setEditA(false)
          setRedirect(true)
          // setLoading(false)
        })
          .catch(e => alert('Erro ao cadastrar'))

      }
    } else {
      if (params != undefined) {
        // setLoading(false)
        axios.put(`${server}/students/${params}`, {
          name: name,
          phone: phone,
          street: street,
          district: district,
          city: city,
          state: state,
          cpf: tiraPontos( cpf ),
        }).then(_ => {
          alert('User alterado');
          setEditA(false)
          setRedirect(true)
          // setLoading(true)

          // window.location = '/students'
        })
          .catch(e => alert('Erro ao atualizar cadastro'))
      }
    }
  }


  const cancelar = (e) => {
    e.preventDefault()
    setEditA(false)
    setRedirect(true)
  }

  const edit = () => {
    if (editA) return
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
        setPassConfirm(student.pass)
        setBirthDate(student.birthDate)
      }).then(_ => {
        setEditA(true)
        // setLoading(true)
      })
    } else {
      // setLoading(true)
    }
  }

  useEffect(() => {
    edit()

  })

  return (
    <div id="studentFContainer">
      <Menu />

      <div id="main">
        <div id="createStudentsF">
          <div id="new">
            <img src={estudante} alt="estudantes" />
            <span>Estudantes</span>
          </div>
          <div id="new_button">
            <button onClick={() => setRedirect(true)} ><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        {loading ? <div id="studentF_list">
          <section>
            {!params ? <h2>Novo Estudante</h2> : <h2>Alterar Estudante</h2>}
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
                  {/* <input type="text" name="state" id="studentF_state" placeholder="Digite o estado" value={state} onChange={e => setState(e.target.value)} /> */}
                    <select name="state" id="studentF_state" value={state} onChange={e => setState(e.target.value)} style={{height: 36}}>
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
                <div id="studentF_cpfbd">
                  <label for="cpf">CPF:</label>
                  <input type="text" maxLength={14} name="cpf" id="studentF_cpf" placeholder="Digite o CPF" value={  cpf ? cpfMask(cpf) : cpf  } onChange={e => setCpf(e.target.value)} />
                  <label className="studentF_birthDate" for="birthDate">Data de nascimento:</label>
                  <input type="date" name="birthDate" id="studentF_birthDate" value={birthDate} onChange={e => setBirthDate(`${e.target.value}`)} />
                  {console.log('niver ====>', birthDate)}
                </div>

                <div>
                  <label for="pass">Senha:</label>
                  <input type="password" name="pass" id="studentF_pass" placeholder="Digite a senha" value={pass} onChange={e => {setPass(e.target.value); setMudouSenha(true)}} />
                </div>
                <div>
                  <label className="studentF_confirmPass" for="confirmPass">Confirmar senha:</label>
                  <input type="password" name="confirmPass" id="studentF_confirmPass" placeholder="Confirme a senha" value={passConfirm} onChange={e => setPassConfirm(e.target.value)} />
                </div>

              </fieldset>
              <div id="studentF_input">
                <input className="studentF_confirm" type="submit" value={!params ? "Cadastrar" : "Atualizar"} onClick={e => cadastrar(e)} />
                <input className="studentF_cancel" type="submit" value="Cancelar" onClick={e => cancelar(e)} />
              </div>
            </form>
          </section>
        </div>
          : <Loading />
        }
        {redirect && <Redirect to="/students" />}
      </div>
    </div>
  );
}

export default StudentsForm;
