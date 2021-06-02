import React from 'react';
import autor from '../../../assets/images/icons/autores.svg';
import retorno from '../../../assets/images/icons/return.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function AuthorsForm() {

  return (
    <div id="container">
      <Menu />

      <div id="main">
        <div id="create">
          <div id="new">
            <img src={autor} alt="autores" />
            <span>Autores</span>
          </div>
          <div id="new_button">
            <button><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        <div id="authorF_list">
          <section>
            <h2>Novo Usuário</h2>
            <form>
              <fieldset>
                <div>
                  <label className="authorF_name" for="name">Nome:</label>
                  <input type="text" name="name" id="authorF_name" placeholder="Digite o nome" />
                </div>
                <div>
                  <label for="countryOrigin">País de origem:</label>
                  <input type="text" name="countryOrigin" id="authorF_countryOrigin" placeholder="Digite o país de origem" />
                </div>
                <div>
                  <label for="authorsNotation">Notação do autor:</label>
                  <input type="text" name="authorsNotation" id="authorF_authorsNotation" placeholder="Digite a notação" />
                </div>
                <div>
                  <label for="genre">Gênero literário:</label>
                  <input type="text" name="genre" id="authorF_genre" placeholder="Digite o gênero literário" />
                </div>
              </fieldset>
              <div id="authorF_input">
                <input className="authorF_confirm" type="submit" value="Cadastrar" />
                <input className="authorF_cancel" type="submit" value="Cancelar" />
              </div>
            </form>
          </section>
        </div>

      </div>
    </div>
  );
}

export default AuthorsForm;
