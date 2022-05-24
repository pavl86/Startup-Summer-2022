

import './start-page.css';
import loupe64x64 from './loupe64x64.png';

const StartPage = () => {
    return (
        <div className="startPage">
            <img src={loupe64x64} className="loupe" alt="loupe" />
            <p>Start with searching</p>
            <p>a GitHub user</p>
        </div>
    )
}

export default StartPage;