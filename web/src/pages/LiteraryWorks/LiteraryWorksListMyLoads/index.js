import React, { useEffect, useState } from 'react';
import livro from '../../../assets/images/icons/livros2.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';
import axios from 'axios';
import { server } from './../../../common'
import { Link } from 'react-router-dom';

function LiteraryWorksList() {

  const [livros, setLivros] = useState([])

  const load = async () => {
    let livr = await axios.get(`${server}/myloans`).then(e => e.data)
    setLivros(livr)
    console.log( livr )
  }

  const excluir1 = (id) => {
    // let result = window.confirm('Deseja excluir?')

    // if (result) {
    //   axios.delete(`${server}/literaryWorks/${id}`).then(_ => alert('Excluido com sucesso!')).catch(e => alert('Ops, a algo errado!'))
    // }

  }

  useEffect(() => {
    load()
  })
  return (
    <div id="container">
      <Menu />

      <div id="main">
        <div id="createLiterary">
          <div id="new">
            <img src={livro} alt="livros" />
            <span>Livros</span>
          </div>
          <div id="new_button">
            <Link to="/literaryworksform" className={'button'}>+</Link>
          </div>
        </div>

        <div id="literaryWork_list">
          <section className="literaryWork_allLiteraryWorks">
            <table  className="literaryWork_table">
              <thead className="literaryWork_title">
                <tr>
                  <th>Livro</th>
                  <th>Emprestado dia</th>
                  <th>Devolver</th>
                  {/* <th>Local</th> */}
                  {/* <th>Ações</th> */}
                </tr>
              </thead>
              <tbody className="literaryWork_list">


                { (livros.length != 0) ? livros.map(liv => (

                  <tr key={liv.id} className={liv.borrowed ? 'borred' : ''}>
                    <th>{liv.literaryWorks_id}</th>
                    <th>{liv.loanDate}</th>
                    <th>{liv.returnDate}</th>
                    {/* <th>{`${liv.locality_id.hall}-${liv.locality_id.bookcase}-${liv.locality_id.shelf}`}</th> */}
                    
                  </tr>
                  // console.log('teste', liv)
                ))
                  :
                  (<div>Nao tem livros</div>)
              }

                {console.log('tanto de livros', livros.length)}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div >
  );
}

export default LiteraryWorksList;
