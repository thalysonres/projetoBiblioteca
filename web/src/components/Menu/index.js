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
						<img src={estudante} alt="estudante" />
						<Link to="/students">Estudantes</Link>
					</li>
					<li class="authors">
						<img src={autor} alt="autor" />
						<Link to="/authors">Autores</Link>
					</li>
					<li class="books">
						<img src={livro} alt="livro" />
						<Link to="/literaryWorks">Livros</Link>
					</li>
					<li class="localities">
						<img src={localidade} alt="localidade" />
						<Link to="/localities">Localidades</Link>
					</li>
					<li class="loans">
						<img src={emprestimo} alt="empréstimo" />
						<Link to="/loans">Empréstimos</Link>
					</li>
					<li class="employees">
						<img src={funcionario} alt="funcionário" />
						<Link to="/employees">Funcionários</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}
