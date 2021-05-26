import React from 'react';
import './styles.css';
import bookGG from '../../assets/images/book-gg.svg';

function Auth() {
  return (
    <div id="auth_container">
      <div id="auth_image">
        <img src={bookGG} alt="livro" />
        <main>
          <h1 className="auth_Text">Biblioteca</h1>
        </main>
      </div>
      <div>
        <form>
          <div className="auth_input">
            <input type="text" name="text" id="auth_text" placeholder="CPF" />
          </div>
          <div className="auth_input">
            <input type="password" name="password" id="auth_password" placeholder="Senha" />
          </div>
          <div className="auth_input">
            <input className="auth_submit" type="submit" value="Entrar" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Auth;
