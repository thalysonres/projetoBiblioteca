import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import livro from '../../../assets/images/icons/livros2.svg';
import retorno from '../../../assets/images/icons/return.svg';
import { Menu } from '../../../components/Menu';
import { server } from '../../../common';
import './styles.css';

function LiteraryWorksForm(props) {

  const [author, setAuthor] = useState()
  const [title, setTitle] = useState()
  const [edition, setEdition] = useState()
  const [numberPage, setNumberPage] = useState()
  const [editionYear, setEditionYear] = useState()
  const [publishingComp, setPublishingComp] = useState()
  const [ISBN, setISBN] = useState()
  const [CDU, setCDU] = useState()
  const [CDD, setCDD] = useState()
  const [publication, setPublication] = useState()
  const [translator, setTranslator] = useState()
  const [locality, setLocality] = useState()
  const [file, setFile] = useState()
  const [load, setLoad] = useState(true)
  const [redirect, setRedirect] = useState(false)
  const [autoresListas, setAutoresLista] = useState([])
  const [localidadeList, setLocalidadeList] = useState([])

  const params = props.match.params.id

  const loadingAutorLocalidade = async () => {
    let autores = await axios.get(`${server}/authors`).then(res => res.data)
    let loc = await axios.get(`${server}/localities`).then(res => res.data)
    setLocalidadeList(loc)
    setAutoresLista(autores)
  }

  const loading = () => {
    if ((params != undefined) && load) {
      axios.get(`${server}/literaryWorks/${params}`)
        .then(livro => {
          let liv = livro.data
          setLoad(false)
          setAuthor(liv.author_id)
          setTitle(liv.title)
          setEdition(liv.edition)
          setNumberPage(liv.numberPage)
          setEditionYear(liv.editionYear)
          setPublishingComp(liv.publishingComp)
          setISBN(liv.ISBN)
          setCDU(liv.CDU)
          setCDD(liv.CDD)
          setPublication(liv.publication)
          setTranslator(liv.translator)
          setLocality(liv.locality_id)
          setFile(liv.file)
          // console.log('aut ', liv.file)
        })
        .catch(e => alert('Algo deu errado'))
    }
  }

  const getIdSelected = (id) => {
    return id.slice(0, id.indexOf(':'))
  }

  const cadastrar = (e) => {
    e.preventDefault()

    if (params != undefined) {
      const formData = new FormData()
      const img = document.querySelector('#literaryWorkF_file')
      console.log('=> ', img.files[0])
      formData.append('file', img.files[0])
      formData.append('author', author)
      formData.append('title', title)
      formData.append('edition', edition)
      formData.append('editionYear', editionYear)
      formData.append('numberPage', numberPage)
      formData.append('publishingComp', publishingComp)
      formData.append('publication', publication)
      formData.append('ISBN', ISBN)
      formData.append('CDD', CDD)
      formData.append('CDU', CDU)
      formData.append('translator', translator)
      formData.append('author_id', getIdSelected(author))
      formData.append('locality_id', getIdSelected(locality))

      axios.put(`${server}/literaryWorks/${params}`, formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        }
      })
        .then(_ => {
          setRedirect(true)
          alert('Salvo com sucesso!')
        })
        .catch('Erro ao atualizar cadastro')
    }
    else {
      alert('Novo')

      const formData = new FormData()
      const img = document.querySelector('#literaryWorkF_file')
      console.log('=> ', img.files[0])
      formData.append('file', img.files[0])
      formData.append('author', author)
      formData.append('title', title)
      formData.append('edition', edition)
      formData.append('editionYear', editionYear)
      formData.append('numberPage', numberPage)
      formData.append('publishingComp', publishingComp)
      formData.append('publication', publication)
      formData.append('ISBN', ISBN)
      formData.append('CDD', CDD)
      formData.append('CDU', CDU)
      formData.append('translator', translator)
      formData.append('author_id', getIdSelected(author))
      formData.append('locality_id', getIdSelected(locality))

      // , title, edition, numberPage, editionYear, publishingComp, ISBN,
      //   CDU, CDD, publication, translator, locality)

      axios.post(`${server}/literaryWorks`, formData, {
        headers: {
          "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
        }
      })
        .then(_ => {
          setRedirect(true)
          alert('Salvo com sucesso!')
        })
        .catch('Erro ao cadastrar')

      // axios.post(`${server}/literaryWorks`, {
      //   author, title, edition, numberPage, editionYear, publishingComp, ISBN,
      //   CDU, CDD, publication, translator, locality,
      //   // file
      // })
      //   .then(_ => {
      //     setRedirect(true)
      //     alert('Salvo com sucesso!')
      //   })
      //   .catch('Algo deu errado')
    }
  }

  const cancelar = (e) => {
    e.preventDefault()
    setRedirect(true)
  }

  useEffect(() => {
    loading()
    loadingAutorLocalidade()
  }, [])

  return (
    <div id="container">
      <Menu />

      <div id="main">
        <div id="createLiteraryF">
          <div id="new">
            <img src={livro} alt="livros" />
            <span>Livros</span>
          </div>
          <div id="new_button">
            <button onClick={() => setRedirect(true)}><img src={retorno} alt="retorno" /></button>
          </div>
        </div>

        <div id="literaryWorkF_list">
          <section>
            {!params ? <h2>Novo Livro</h2> : <h2>Alterar Livro</h2>}
            <form>
              <fieldset>
                <div>
                  <label for="author">Autor:</label>
                  <input type="search" name="author" list="autorList" id="literaryWorkF_author" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Selecione o autor" />

                  <datalist id="autorList">
                    {autoresListas.map(aut => (
                      <option key={aut.id} value={`${aut.id}: ${aut.name}`}>{aut.name}</option>)
                    )}
                  </datalist>

                </div>
                <div>
                  <label for="title">Nome:</label>
                  <input type="text" name="title" id="literaryWorkF_title" value={title} onChange={e => setTitle(e.target.value)} placeholder="Digite o nome" />
                </div>
                <div>
                  <label for="edition">Edição:</label>
                  <input type="text" name="edition" id="literaryWorkF_edition" value={edition} onChange={e => setEdition(e.target.value)} placeholder="Digite a edição" />
                  <label className="literaryWorkF_numberPage" for="numberPage">Nº de pág:</label>
                  <input type="text" name="numberPage" id="literaryWorkF_numberPage" value={numberPage} onChange={e => setNumberPage(e.target.value)} placeholder="Digite o nº de páginas" />
                </div>
                <div>
                  <label for="editionYear">Ano:</label>
                  <input type="text" name="editionYear" id="literaryWorkF_editionYear" value={editionYear} onChange={e => setEditionYear(e.target.value)} placeholder="Digite o ano" />
                  <label for="publishingComp">Editora:</label>
                  <input type="text" name="publishingComp" id="literaryWorkF_publishingComp" value={publishingComp} onChange={e => setPublishingComp(e.target.value)} placeholder="Digite a editora" />
                </div>
                <div>
                  <label for="ISBN">ISBN:</label>
                  <input type="text" name="ISBN" id="literaryWorkF_ISBN" value={ISBN} onChange={e => setISBN(e.target.value)} placeholder="Digite o ISBN" />
                  <label className="literaryWorkF_CDU" for="CDU">CDU:</label>
                  <input type="text" name="CDU" id="literaryWorkF_CDU" value={CDU} onChange={e => setCDU(e.target.value)} placeholder="Digite o CDU" />
                </div>
                <div>
                  <label className="literaryWorkF_CDD" for="CDD">CDD:</label>
                  <input type="text" name="CDD" id="literaryWorkF_CDD" value={CDD} onChange={e => setCDD(e.target.value)} placeholder="Digite o CDD" />
                  <label className="literaryWorkF_publication" for="publication">Local de pub:</label>
                  <input type="text" name="publication" id="literaryWorkF_publication" value={publication} onChange={e => setPublication(e.target.value)} placeholder="Digite o local de publicação" />
                </div>
                <div>
                  <label className="literaryWorkF_translator" for="translator">Tradutor:</label>
                  <input type="text" name="translator" id="literaryWorkF_translator" value={translator} onChange={e => setTranslator(e.target.value)} placeholder="Digite o nome do tradutor" />
                </div>
                <div>
                  <label className="literaryWorkF_locality" for="locality">Localidade:</label>
                  <input type="search" name="locality" id="literaryWorkF_locality" list="localidadesList" value={locality} onChange={e => setLocality(e.target.value)} placeholder="Selecione o local" />

                  <datalist id="localidadesList">
                    {localidadeList.map(loc => (
                      <option key={loc.id} value={`${loc.id}: ${loc.hall}/${loc.bookcase}/${loc.shelf}`}></option>
                    ))
                    }
                  </datalist>
                </div>
                <div>
                  <label className="file" for="file">Capa do livro:
                    <input type="file" name="file" id="literaryWorkF_file" />
                  </label>
                </div>
                <img src={file} width={'155px'} height={'233px'} />
              </fieldset>
              <div id="literaryWorkF_input">
                <input className="literaryWorkF_confirm" type="submit" value="Cadastrar" onClick={e => cadastrar(e)} />
                <input className="literaryWorkF_cancel" type="submit" value="Cancelar" onClick={e => cancelar(e)} />
              </div>
            </form>
          </section>
        </div>
        {redirect && <Redirect to={"/literaryWorks"} />}
      </div>
    </div >
  );
}

export default LiteraryWorksForm;
