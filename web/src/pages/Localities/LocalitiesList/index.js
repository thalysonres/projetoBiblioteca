import React, { useEffect, useState } from 'react';
import localidade from '../../../assets/images/icons/localidade.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';
import axios from 'axios';
import { server } from './../../../common'
import { Link } from 'react-router-dom';

function LocalitiesList() {

  const [locais, setLocais] = useState([])

  const load = () => {
    axios.get(`${server}/localities`).then(res => {
      let local = res.data
      setLocais(local)
    })
  }

  const deletar = (id) => {
    let result = window.confirm('Deseja deletar?')
    if (result) {
      axios.delete(`${server}/localities/${id}`).then(_ => alert('Deletado'))
        .catch(e => alert('algo errado!'))
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
            <img src={localidade} alt="localidades" />
            <span>Localidades</span>
          </div>
          <div id="new_button">
            <Link to={'/localitiesform'} className="button" >+</Link>
          </div>
        </div>

        <div id="locality_list">
          <section className="locality_allLocalities">
            <table cellSpacing={0}>
              <thead className="locality_title">
                <tr>
                  <th>Corredor</th>
                  <th>Estante</th>
                  <th>Prateleira</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody className="locality_list">
                {locais.map(loc => (
                  <tr key={loc.id}>
                    <th>{loc.hall}</th>
                    <th>{loc.bookcase}</th>
                    <th>{loc.shelf}</th>
                    <th>
                      <Link to={`/localitiesform/${loc.id}`}><img src={editar} alt="editar" /></Link>
                      <img src={excluir} alt="excluir" onClick={() => deletar(loc.id)} />
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

export default LocalitiesList;
