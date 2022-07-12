import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header" id={theme}>
        <div className="container flex">
            <h1 className="title">Where in the world?</h1>
            <button 
              className="theme-switcher"
              onClick={toggleTheme}
            >
              <FontAwesomeIcon icon={faMoon} className="moon" />
              <span className="theme-name">Dark mode</span>
            </button>
        </div>
    </header>
  )
}

export default Header;