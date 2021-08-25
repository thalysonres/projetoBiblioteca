import React from 'react'
import bookPP from '../../assets/images/book-pp.svg';
import estudante from '../../assets/images/icons/estudantes.svg';
import autor from '../../assets/images/icons/autores.svg';
import livro from '../../assets/images/icons/livros2.svg';
import localidade from '../../assets/images/icons/localidade.svg';
import emprestimo from '../../assets/images/icons/emprestimos.svg';
import funcionario from '../../assets/images/icons/funcionarios.svg';
import { Link } from 'react-router-dom';
import './styles.css';

export const Menu = props => {
	return (
		<div id="menu">
			<div id="icon-menu">
				<img src={bookPP} alt="livro" />
				<span>Biblioteca</span>
			</div>
			<div id="items-menu">
				<ul id="navigation">
					<li class="students">
						<Link to="/students">
							<img src={estudante} alt="estudante" />
							<span>Estudantes</span>
						</Link>
					</li>
					<li class="authors">
						<Link to="/authors">
							<img src={autor} alt="autor" />
							<span>Autores</span>
						</Link>
					</li>
					<li class="books">
						<Link to="/literaryWorks">
							<img src={livro} alt="livro" />
							<span>Livros</span>
						</Link>
					</li>
					<li class="localities">
						<Link to="/localities">
							<img src={localidade} alt="localidade" />
							<span>Localidades</span>
						</Link>
					</li>
					<li class="loans">
						<Link to="/loans">
							<img src={emprestimo} alt="empréstimo" />
							<span>Empréstimos</span>
						</Link>
					</li>
					<li class="employees">
						<Link to="/employees">
							<img src={funcionario} alt="funcionário" />
							<span>Funcionários</span>
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
