import logo from '../../logo.svg';
import loupe from '../../loupe.svg';
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="logo" alt="githab logo" />
            <div className='search-form'>
                <img  src={loupe} alt='search icon'/>
                <input type="text" placeholder="Enter GitHab username" className='inputSearchForm'/>
            </div>
        </div>
    )
}

export default Header;