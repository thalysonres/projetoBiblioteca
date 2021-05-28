import React from 'react';
import bookPP from '../../../assets/images/book-pp.svg';
import estudante from '../../../assets/images/icons/estudantes.svg';
import autor from '../../../assets/images/icons/autores.svg';
import livro from '../../../assets/images/icons/livros2.svg';
import localidade from '../../../assets/images/icons/localidade.svg';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import funcionario from '../../../assets/images/icons/funcionarios.svg';
import './styles.css';

function LocalitiesForm() {
    
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
            <li class="employees">
              <img src={funcionario} alt="funcionário"/>
              <a href="#">Funcionários</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div id="main">
        <div id="create">
          <div id="new">
            <img src={localidade} alt="localidades"/>
            <span>Localidades</span>
          </div>
          <div id="new_button">
            <button>+</button>
          </div>
        </div>

        <div id="localityF_list">
          <section>
            <h2>Novo Usuário</h2>
            <form>
              <fieldset>
                <div>
                  <label for="hall">Corredor:</label>
                  <input type="text" name="hall" id="localityF_hall" placeholder="Digite o corredor"/>
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
