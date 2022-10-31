import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Cinema Arena</NavLink>
      <a href="https://github.com/Iker-Romero" target="_blank" rel="noreferrer">
        <img
          src="https://res.cloudinary.com/dvwva99mi/image/upload/v1665572313/logos/github-light_bblejx.png"
          alt="GitHub logo external link"
        />
      </a>
    </nav>
  );
};

export default Nav;
