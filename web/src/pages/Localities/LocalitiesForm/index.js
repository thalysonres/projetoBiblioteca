import React from 'react';
import localidade from '../../../assets/images/icons/localidade.svg';
import retorno from '../../../assets/images/icons/return.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function LocalitiesForm() {

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
            <button><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        <div id="localityF_list">
          <section>
            <h2>Nova Localidade</h2>
            <form>
              <fieldset>
                <div>
                  <label for="hall">Corredor:</label>
                  <input type="text" name="hall" id="localityF_hall" placeholder="Digite o corredor" />
                </div>
                <div>
                  <label for="bookcase">Estante:</label>
                  <input type="text" name="bookcase" id="localityF_bookcase" placeholder="Digite a estante" />
                </div>
                <div>
                  <label for="shelf">Prateleira:</label>
                  <input type="text" name="shelf" id="localityF_shelf" placeholder="Digite a prateleira" />
                </div>
              </fieldset>
              <div id="localityF_input">
                <input className="localityF_confirm" type="submit" value="Cadastrar" />
                <input className="localityF_cancel" type="submit" value="Cancelar" />
              </div>
            </form>
          </section>
        </div>

      </div>
    </div>
  );
}

export default LocalitiesForm;
