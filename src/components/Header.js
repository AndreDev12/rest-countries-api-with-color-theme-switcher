import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <header className="header">
        <div className="container flex">
            <h1 className="title">Where in the world?</h1>
            <button className="theme-switcher">
              <FontAwesomeIcon icon={faMoon} />
              <span className="theme-name">Dark mode</span>
            </button>
        </div>
    </header>
  )
}

export default Header;