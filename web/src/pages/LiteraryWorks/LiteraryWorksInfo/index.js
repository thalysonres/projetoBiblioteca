import React from 'react';
import livro from '../../../assets/images/icons/livros2.svg';
import retorno from '../../../assets/images/icons/return.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';

function LiteraryWorksInfo() {

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
            <button><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        <div id="literaryWorksI_list">
          <section>
            <h2>Título do livro</h2>
          </section>
        </div>

      </div>
    </div>
  );
}

export default LiteraryWorksInfo;
