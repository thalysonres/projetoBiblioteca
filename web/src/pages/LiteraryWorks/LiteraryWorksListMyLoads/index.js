import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import emprestimo from '../../../assets/images/icons/emprestimos.svg';
import { Menu } from '../../../components/Menu';
import { server } from './../../../common'
import './styles.css';
import { tratarData } from '../../../utils';

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
  }, [])
  return (
    <div id="literaryWorkSContainer">
      <Menu />

      <div id="main">
        <div id="createLiteraryS">
          <div id="new">
            <img src={emprestimo} alt="emprestimos" />
            <span>Meus empréstimos</span>
          </div>
        </div>

        <div id="literaryWorkS_list">
          <section className="literaryWorkS_allLiteraryWorks">
            <table  className="literaryWorkS_table">
              <thead className="literaryWorkS_title">
                <tr>
                  <th>Livro</th>
                  <th>Emprestado dia</th>
                  <th>Devolver</th>
                </tr>
              </thead>
              <tbody className="literaryWorkS_list">

                { (livros.length != 0) ? livros.map(liv => (

                  <tr key={liv.id} className={liv.borrowed ? 'borred' : ''}>
                    <th className="th_LWStitle">
                      <Link to={`/literaryworksinfo/${liv.id_Book}`}> {liv.literaryWorks_id} </Link>
                    </th>
                    <th>{ tratarData( liv.loanDate ) }</th>
                    <th>{ tratarData( liv.returnDate ) }</th>
                    {/* <th>{`${liv.locality_id.hall}-${liv.locality_id.bookcase}-${liv.locality_id.shelf}`}</th> */}
                    
                  </tr>
                  // console.log('teste', liv)
                ))
                  :
                  (<div>Nao tem livros</div>)
              }
                {console.log('tanto de livros', livros)}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div >
  );
}

export default LiteraryWorksList;
