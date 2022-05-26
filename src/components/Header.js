import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const Header = () => {
  return (
    <div className="header">
        <div className="container grid">
            <h1 className="title">where in the world?</h1>
            <button className="theme-switcher">
              <FontAwesomeIcon icon={faMoon} />
              <span className="theme-name">Dark mode</span>
            </button>
        </div>
    </div>
  )
}

export default Header;