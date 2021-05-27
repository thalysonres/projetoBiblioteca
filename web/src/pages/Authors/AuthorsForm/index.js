import React from 'react';
import bookPP from '../../../assets/images/book-pp.svg';
import estudante from '../../../assets/images/icons/estudantes.svg';
import autor from '../../../assets/images/icons/autores.svg';
import livro from '../../../assets/images/icons/livros2.svg';
import localidade from '../../../assets/images/icons/localidade.svg';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
import './styles.css';

function AuthorsForm() {
    
  return (
    <div id="container">
      <div id="menu">
        <div id="icon-menu">
          <img src={bookPP} alt="livro"/>
          <span>Biblioteca</span>
        </div>
        <div id="items-menu">
          <ul id="navigation">
            <li class="students">
              <img src={estudante} alt="estudante"/>
              <a href="#">Estudantes</a>
            </li>
            <li class="authors">
              <img src={autor} alt="autor"/>
              <a href="#">Autores</a>
            </li>
            <li class="books">
              <img src={livro} alt="livro"/>
              <a href="#">Livros</a>
            </li>
            <li class="localities">
              <img src={localidade} alt="localidade"/>
              <a href="#">Localidades</a>
            </li>
            <li class="loans">
              <img src={emprestimo} alt="empréstimo"/>
              <a href="#">Empréstimos</a>
            </li>
            <li class="authors">
              <img src={funcionario} alt="funcionário"/>
              <a href="#">Funcionários</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div id="main">
        <div id="create">
          <div id="new">
            <img src={autor} alt="autor"/>
            <span>Autores</span>
          </div>
          <div id="new_button">
            <button>+</button>
          </div>
        </div>

        <div id="authorF_list">
          <section>
            <h2>Novo Usuário</h2>
            <form>
              <fieldset>
                <div>
                  <label for="name">Nome:</label>
                  <input type="text" name="name" id="authorF_name" placeholder="Digite o nome"/>
                </div>
                <div>
                  <label for="countryOrigin">País de origem:</label>
                  <input type="tel" name="countryOrigin" id="authorF_countryOrigin" placeholder="Digite o país de origem" />
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
