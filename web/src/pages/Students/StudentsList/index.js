import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../../../components/Menu';
import { server } from '../../../common'
import estudante from '../../../assets/images/icons/estudantes.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';

import StudentsForm from '../StudentsForm';

function StudentsList() {

  const [load, setLoad] = useState([])

  const loadStudents = async () => {
    const students = await axios(`${server}/students`).then(es => es.data)

    setLoad(students)
  }

  const deletar = (params) => {
    let resultado = window.confirm('Deseja realmente excluir o usuario?')
    if (resultado) {
      axios.delete(`${server}/students/${params}`)
        .then(_ => {
          alert('Usuario excluido com sucesso!')
          loadStudents()
        }).catch(e => alert('Usuario não excluido!!'))
    }
  }

  loadStudents()

  return (
    <div id="container">

      <Menu />

      <div id="main">
        <div id="create">
          <div id="new">
            <img src={estudante} alt="estudantes" />
            <span>Estudantes</span>
          </div>
          <div id="new_button">
            <Link className="button" to="/studentsForm">+</Link>
          </div>
        </div>

        <div id="student_list">
          <section className="student_allStudents">
            <table cellSpacing={0}>
              <thead className="student_title">
                <tr>
                  <th>CPF</th>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="student_list">

                {load.map(e => (
                  <tr key={e.id}>
                    <th>{e.cpf}</th>
                    <th>{e.name}</th>
                    <th>
                      <Link to={`/studentsForm/${e.id}`}><img src={editar} alt="editar" /></Link>
                      <img src={excluir} alt="excluir" onClick={() => deletar(e.id)} />
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

export default StudentsList;
