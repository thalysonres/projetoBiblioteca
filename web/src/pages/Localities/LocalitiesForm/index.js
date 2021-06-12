import React, { useEffect, useState } from 'react';
import localidade from '../../../assets/images/icons/localidade.svg';
import retorno from '../../../assets/images/icons/return.svg';
import './styles.css';
import { Menu } from '../../../components/Menu';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../../common';

function LocalitiesForm(props) {

  const [hall, setHall] = useState()
  const [bookcase, setBookcase] = useState()
  const [shelf, setShelf] = useState()
  const [redirect, setRedirect] = useState(false)
  const [load, setLoad] = useState(true)

  const params = props.match.params.id

  const loading = async () => {
    if (params != undefined && load) {
      let local = await axios.get(`${server}/localities/${params}`).then(res => {
        setLoad(false)
        return res.data
      })
      setHall(local.hall)
      setBookcase(local.bookcase)
      setShelf(local.shelf)
    }
  }

  const cadastrar = (e) => {
    e.preventDefault()
    if (params != undefined) {
      axios.put(`${server}/localities/${params}`, {
        hall, bookcase, shelf
      })
        .then(_ => {
          alert('Salvo com sucesso!!!')
          setRedirect(true)
        })
        .catch(e => alert('Algo errado!'))
    }
    else {
      axios.post(`${server}/localities`, {
        hall, bookcase, shelf
      })
        .then(_ => {
          alert('Salvo com sucesso!!!')
          setRedirect(true)
        })
        .catch(e => alert('Algo errado!'))
    }
  }

  useEffect(() => {
    loading()
  })

  return (
    <div id="container">
      <Menu />

      <div id="main">
        <div id="create">
          <div id="new">
            <img src={localidade} alt="localidades" />
            <span>Localidades</span>
          </div>
          <div id="new_button">
            <button><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        <div id="localityF_list">
          <section>
            {!params ? <h2>Nova Localidade</h2> : <h2>Alterar Localidade</h2>}
            <form>
              <fieldset>
                <div>
                  <label for="hall">Corredor:</label>
                  <input type="text" name="hall" value={hall} onChange={e => setHall(e.target.value)} id="localityF_hall" placeholder="Digite o corredor" />
                </div>
                <div>
                  <label for="bookcase">Estante:</label>
                  <input type="text" name="bookcase" value={bookcase} onChange={e => setBookcase(e.target.value)} id="localityF_bookcase" placeholder="Digite a estante" />
                </div>
                <div>
                  <label for="shelf">Prateleira:</label>
                  <input type="text" name="shelf" value={shelf} onChange={e => setShelf(e.target.value)} id="localityF_shelf" placeholder="Digite a prateleira" />
                </div>
              </fieldset>
              <div id="localityF_input">
                <input className="localityF_confirm" type="submit" value="Cadastrar" onClick={e => cadastrar(e)} />
                <input className="localityF_cancel" type="submit" value="Cancelar" onClick={() => setRedirect(true)} />
              </div>
            </form>
          </section>
        </div>
        {redirect && <Redirect to="/localities" />}
      </div>
    </div>
  );
}

export default LocalitiesForm;
