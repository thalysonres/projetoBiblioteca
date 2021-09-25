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

	let admin = parseInt( localStorage.getItem('admin') )
	{ console.log( (admin)) }
	return (
		<div id="menu">
			<div id="icon-menu">
				<img src={bookPP} alt="livro" />
				<span>Biblioteca</span>
			</div>
			<div id="items-menu">
				<ul id="navigation">
					{ !!admin &&
						<li class="students">
							<Link to="/students">
								<img src={estudante} alt="estudante" />
								<span>Estudantes</span>
							</Link>
						</li>
					}

					{ !!admin &&
						<li class="authors">
							<Link to="/authors">
								<img src={autor} alt="autor" />
								<span>Autores</span>
							</Link>
						</li>
					}

					<li class="books">
						<Link to="/literaryWorks">
							<img src={livro} alt="livro" />
							<span>Livros</span>
						</Link>
					</li>

					{ !!admin &&
						<li class="localities">
							<Link to="/localities">
								<img src={localidade} alt="localidade" />
								<span>Localidades</span>
							</Link>
						</li>
					}
					
					{/* mudar rota */}
					{ !!admin ?
						<li class="loans">
							<Link to="/loans">
								<img src={emprestimo} alt="empréstimo" />
								<span>Empréstimos</span>
							</Link>
						</li>

						:

						<li class="loans">
							<Link to="/meusEmprestimos">
								<img src={emprestimo} alt="empréstimo" />
								<span>Empréstimos</span>
							</Link>
						</li>
					}

					{ !!admin &&
						<li class="employees">
							<Link to="/employees">
								<img src={funcionario} alt="funcionário" />
								<span>Funcionários</span>
							</Link>
						</li>
					}

				</ul>
			</div>
		</div>
	)
}
