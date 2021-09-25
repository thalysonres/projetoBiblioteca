import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import estudante from '../../../assets/images/icons/estudantes.svg';
import { Menu } from '../../../components/Menu';
import { server } from '../../../common'
import { Loading } from '../../../components/Loading';
import './styles.css';

const loadStudents = async (setLoad, setLoading) => {
  const students = await axios(`${server}/students`).then(es => {

    setLoading(true)
    return es.data
  })
    .catch((e, i, o) => {
      alert(`Erro ao carregar os estudantes => ${e}`)
      setLoading(false)
    })
  setLoad(students)

}

function StudentsList() {

  const [load, setLoad] = useState([])
  const [loading, setLoading] = useState(false)


  const deletar = (params) => {
    let resultado = window.confirm('Deseja excluir?')
    if (resultado) {
      axios.delete(`${server}/students/${params}`)
        .then(_ => {
          alert('Usuario excluido com sucesso!')
          loadStudents(setLoad, setLoading)
        }).catch(e => alert('Erro ao excluir'))
    }
  }

  const mask = (cpf) => cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11)

  useEffect(() => {
    loadStudents(setLoad, setLoading)
  })

  return (
    <div id="container">
      <Menu />

      <div id="main">
        <div id="createStudents">
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
            <table  className="student_table">
              <thead className="student_title">
                <tr>
                  <th>CPF</th>
                  <th>Nome</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="student_list">

                {loading && load.map(e => (
                  <tr key={e.id}>
                    <th>{mask(e.cpf)}</th>
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
            {!loading && <Loading />}
          </section>
        </div>
      </div>
    </div>
  );
}

export default StudentsList;
