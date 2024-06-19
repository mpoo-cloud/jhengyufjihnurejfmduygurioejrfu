
import './top.css';
import logoadb from '../assets/logo.png';

export const Top = ()=>{
    return(<>
        <header className='nav_wrapper'>

            <div className='log_wrapper'>
                <img 
                    alt='logoadb'
                    className='loggoadb'
                    src={logoadb}
                />
            </div>

            <nav className='nav_elem__'>
                <ul>
                    <li className='llii'>Edit</li>
                    <li className='llii'>View</li>
                    <li className='llii'>Download</li>
                    <li className='llii'>Save</li>
                </ul>
            </nav>
            
        </header>
    </>)
}