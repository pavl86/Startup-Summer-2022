import logo from '../../logo.svg';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="githab logo" />
            <input type="text" className='search-form'/>
        </div>
    )
}

export default Header;