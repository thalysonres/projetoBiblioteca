import React, { useEffect, useState } from 'react';
import livro from '../../../assets/images/icons/livros2.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';
import axios from 'axios';
import { server } from './../../../common'
import { Link } from 'react-router-dom';

function LiteraryWorksList() {

  const [livros, setLivros] = useState([])

  const load = async () => {
    let livr = await axios.get(`${server}/literaryWorks`).then(e => e.data)
    setLivros(livr)
  }

  const excluir1 = (id) => {
    let result = window.confirm('Deseja excluir?')

    if (result) {
      axios.delete(`${server}/literaryWorks/${id}`).then(_ => alert('Excluido com sucesso!')).catch(e => alert('Ops, a algo errado!'))
    }

  }

  useEffect(() => {
    load()
  })
  return (
    <div id="container">
      <Menu />

      <div id="main">
        <div id="create">
          <div id="new">
            <img src={livro} alt="livros" />
            <span>Livros</span>
          </div>
          <div id="new_button">
            <Link to="/literaryworksform" className={'button'}>+</Link>
          </div>
        </div>

        <div id="literaryWork_list">
          <section className="literaryWork_allLiteraryWorks">
            <table cellSpacing={0}>
              <thead className="literaryWork_title">
                <tr>
                  <th>Livro</th>
                  <th>Autor</th>
                  <th>Dispon.</th>
                  <th>Local</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="literaryWork_list">


                {livros.map(liv => (

                  <tr key={liv.id} className={liv.borrowed ? 'borred' : ''}>
                    <th>{liv.title}</th>
                    <th>{liv.author_id}</th>
                    {liv.borrowed ? <th>Não</th> : <th>Sim</th>}
                    <th>{`${liv.locality_id.hall}-${liv.locality_id.bookcase}-${liv.locality_id.shelf}`}</th>
                    <th>
                      <Link to={`/literaryworksform/${liv.id}`}><img src={editar} alt="editar" /></Link>
                      <img src={excluir} alt="excluir" onClick={() => excluir1(liv.id)} />
                    </th>
                  </tr>
                ))}

                {console.log(livros)}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div >
  );
}

export default LiteraryWorksList;
