import React from 'react';
import './styles.css';
import bookGG from '../../assets/images/book-gg.svg';

function Auth() {
  return (
    <div id="container">
      <div id="image">
        <img src={bookGG} alt="livro"/>
        <main>
          <h1>Biblioteca</h1>
        </main>
      </div>
      <div>
        <form>
          <div>
            <input type="text" name="text" id="text" placeholder="CPF" />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder="Senha" />
          </div>
          <div>
            <input class="submit" type="submit" value="Entrar" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
