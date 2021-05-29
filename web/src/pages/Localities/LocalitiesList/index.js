import React from 'react';
import localidade from '../../../assets/images/icons/localidade.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function LocalitiesList() {

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
            <button>+</button>
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
                <tr>
                  <th>01</th>
                  <th>01</th>
                  <th>AB</th>
                  <th>
                    <img src={editar} alt="editar" />
                    <img src={excluir} alt="excluir" />
                  </th>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
}

export default LocalitiesList;
