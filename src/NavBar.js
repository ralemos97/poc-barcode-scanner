import { Link } from 'react-router-dom';

const NavBar = () => {
 return (
 <nav>
       <ul>
          <li>
             <Link to="/">react-qr-barcode-scanner</Link>
          </li>
          <li>
             <Link to="/quagga">Quagga</Link>
          </li>
          <li>
             <Link to="/html5qr">html5-qrcode</Link>
          </li>
          <li>
             <Link to="/xzing">zXing react</Link>
          </li>
       </ul>
 </nav>
 );
};

export default NavBar;