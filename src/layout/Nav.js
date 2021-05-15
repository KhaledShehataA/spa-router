import { NavLink } from 'react-router-dom';

const Nav = () => {
	return (
		<nav className='bg-purple-600 text-white p-4 shadow'>
			<ul className='flex space-x-6 justify-end'>
				<li>
					<NavLink to='/' activeClassName='border border-white'>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/about' activeClassName='border border-white'>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to='/contact' activeClassName=''>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
