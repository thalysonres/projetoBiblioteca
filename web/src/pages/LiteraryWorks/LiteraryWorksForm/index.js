import React from 'react';
import livro from '../../../assets/images/icons/livros2.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function LiteraryWorksForm() {

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
            <button>+</button>
          </div>
        </div>

        <div id="literaryWorkF_list">
          <section>
            <h2>Novo Livro</h2>
            <form>
              <fieldset>
                <div>
                  <label for="author">Autor:</label>
                  <input type="text" name="author" id="literaryWorkF_author" placeholder="Selecione o autor" />
                </div>
                <div>
                  <label for="title">Nome:</label>
                  <input type="text" name="title" id="literaryWorkF_title" placeholder="Digite o nome" />
                </div>
                <div>
                  <label for="edition">Edição:</label>
                  <input type="text" name="edition" id="literaryWorkF_edition" placeholder="Digite a edição" />
                  <label for="editionYear">Ano:</label>
                  <input type="text" name="editionYear" id="literaryWorkF_editionYear" placeholder="Digite o ano" />
                </div>
                <div>
                  <label className="literaryWorkF_numberPage" for="numberPage">Nº de pág:</label>
                  <input type="text" name="numberPage" id="literaryWorkF_numberPage" placeholder="Digite o nº de páginas" />
                  <label for="publishingComp">Editora:</label>
                  <input type="text" name="publishingComp" id="literaryWorkF_publishingComp" placeholder="Digite a editora" />
                </div>
                <div>
                  <label className="literaryWorkF_publication" for="publication">Local de pub:</label>
                  <input type="text" name="publication" id="literaryWorkF_publication" placeholder="Digite o local de publicação" />
                  <label className="literaryWorkF_CDD" for="CDD">CDD:</label>
                  <input type="text" name="CDD" id="literaryWorkF_CDD" placeholder="Digite o CDD" />
                </div>
                <div>
                  <label for="ISBN">ISBN:</label>
                  <input type="text" name="ISBN" id="literaryWorkF_ISBN" placeholder="Digite o ISBN" />
                  <label for="CDU">CDU:</label>
                  <input type="text" name="CDU" id="literaryWorkF_CDU" placeholder="Digite o CDU" />
                </div>
                <div>
                  <label className="literaryWorkF_translator" for="translator">Tradutor:</label>
                  <input type="text" name="translator" id="literaryWorkF_translator" placeholder="Digite o nome do tradutor" />
                </div>
                <div>
                  <label  className="literaryWorkF_locality" for="locality">Localidade:</label>
                  <input type="text" name="locality" id="literaryWorkF_locality" placeholder="Selecione o local" />
                </div>
                <div>
                  <label className="file" for="file">Capa do livro:
                    <input type="file" name="file" id="literaryWorkF_file"/>
                  </label>
                </div>
              </fieldset>
              <div id="literaryWorkF_input">
                <input className="literaryWorkF_confirm" type="submit" value="Cadastrar" />
                <input className="literaryWorkF_cancel" type="submit" value="Cancelar" />
              </div>
            </form>
          </section>
        </div>

      </div>
    </div>
  );
}

export default LiteraryWorksForm;
