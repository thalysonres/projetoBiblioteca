import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import livro from '../../../assets/images/icons/livros2.svg';
import editar from '../../../assets/images/icons/editar.svg';
import excluir from '../../../assets/images/icons/excluir.svg';
import { Menu } from '../../../components/Menu';
import { server } from './../../../common'
import './styles.css';

function LiteraryWorksList() {

  const [livros, setLivros] = useState([])

  const load = async () => {
    let livr = await axios.get(`${server}/literaryWorks`).then(e => e.data)
    setLivros(livr)
  }

  const excluir1 = (id) => {
    let result = window.confirm('Deseja excluir?')

    if (result) {
      axios.delete(`${server}/literaryWorks/${id}`)
      .then(_ => alert('Excluído com sucesso!'))
      .catch(e => alert('Erro ao excluir'))
    }

  }

  useEffect(() => {
    load()
  }, [])

  let admin = parseInt( localStorage.getItem('admin') )

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
                  <th>Capa</th>
                  <th>Livro</th>
                  <th>Autor</th>
                  <th>Dispon.</th>
                  <th>Local</th>
                  {!!admin &&
                    <th>Ações</th>
                  }
                </tr>
              </thead>
              <tbody className="literaryWork_list">


                {livros.map(liv => (
                  <tr key={liv.id} className={liv.borrowed ? 'borred' : ''}>
                    <th> <Link to ={`literaryworksinfo/${liv.id}`}><img className="img-livro-list" src={liv.file} /></Link> </th>
                    <td className="th_LWtitle"><Link to ={`literaryworksinfo/${liv.id}`}>{liv.title}</Link></td>
                    <td>{liv.author_id}</td>
                    {liv.borrowed ? <td>Não</td> : <td>Sim</td>}
                    <td>{`${liv.locality_id.hall}-${liv.locality_id.bookcase}-${liv.locality_id.shelf}`}</td>
                  
                    {!!admin &&
                      <td>
                        <Link to={`/literaryworksform/${liv.id}`}><img src={editar} alt="editar" /></Link>
                        <img src={excluir} alt="excluir" onClick={() => excluir1(liv.id)} />
                      </td>
                    }
                  </tr>
                ))}

                {console.log(livros)}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div >
  );
}

export default LiteraryWorksList;
