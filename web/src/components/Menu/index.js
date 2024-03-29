import React from 'react'
import { Link } from 'react-router-dom';
import bookPP from '../../assets/images/book-pp.svg';
import autor from '../../assets/images/icons/autores.svg';
import livro from '../../assets/images/icons/livros2.svg';
import estudante from '../../assets/images/icons/estudantes.svg';
import localidade from '../../assets/images/icons/localidade.svg';
import emprestimo from '../../assets/images/icons/emprestimos.svg';
import funcionario from '../../assets/images/icons/funcionarios.svg';
import './styles.css';

export const Menu = props => {

	const logout = () => {
		window.localStorage.logadoUser = ''
		window.localStorage.admin = ''
		window.location.href = '/'
	}

	let admin = parseInt( localStorage.getItem('admin') )
	// { console.log( (admin)) }
	return (
		<div id="menu">
			<div id="icon-menu">
				<img src={bookPP} alt="livro" />
				<span id="menu_text">Biblioteca</span>
			</div>
			<div id="items-menu">
				<ul id="navigation">
					{ !!admin &&
						<li class="students">
							<Link to="/students">
								<img src={estudante} alt="estudante" />
								<span id="menu_text">Estudantes</span>
							</Link>
						</li>
					}

					{ !!admin &&
						<li class="authors">
							<Link to="/authors">
								<img src={autor} alt="autor" />
								<span id="menu_text">Autores</span>
							</Link>
						</li>
					}

					<li class="books">
						<Link to="/literaryWorks">
							<img src={livro} alt="livro" />
							<span id="menu_text">Livros</span>
						</Link>
					</li>

					{ !!admin &&
						<li class="localities">
							<Link to="/localities">
								<img src={localidade} alt="localidade" />
								<span id="menu_text">Localidades</span>
							</Link>
						</li>
					}
					
					{/* mudar rota */}
					{ !!admin ?
						<li class="loans">
							<Link to="/loans">
								<img src={emprestimo} alt="empréstimo" />
								<span id="menu_text">Empréstimos</span>
							</Link>
						</li>

						:

						<li class="loans">
							<Link to="/myloans">
								<img src={emprestimo} alt="empréstimo" />
								<span id="menu_text">Empréstimos</span>
							</Link>
						</li>
					}

					{ !!admin &&
						<li class="employees">
							<Link to="/employees">
								<img src={funcionario} alt="funcionário" />
								<span id="menu_text">Funcionários</span>
							</Link>
						</li>
					}
				</ul>

				<span id="logout">
      		<a onClick={() => logout()}>Sair</a>
    		</span>
			</div>
		</div>
	)
}
