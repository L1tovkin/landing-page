import './App.css';
import { toggleMenu, imgSlider, changeCircleColor } from './functions.js';
import logo from './assets/logo.png';
import img1 from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import thumb1 from './assets/thumb1.png';
import thumb2 from './assets/thumb2.png';
import thumb3 from './assets/thumb3.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import instagram from './assets/instagram.png';
import Footer from './components/Footer.js'

const App = () => {

  return (
    <div>
      <section>
        <div className='circle'></div>
        <header>
        <a href='/'><img className='logo' src={logo} alt='logo'></img></a>
        <div className='toggle' onClick={toggleMenu}></div>
        <ul className='navigation'>
          <li><a href='/'>Home</a></li>
          <li><a href='https://www.starbucks.com/menu'>Menu</a></li>
          <li><a href='https://www.starbucks.com/menu/product/2123792/hot'>What's New</a></li>
          <li><a href='https://www.starbucks.com/contact/'>Contact</a></li>
        </ul>
        </header>
        <div className='content'>
          <div className='textBox'>
            <h2>It's not just a Coffee<br></br>It's <span>Starbucks</span></h2>
            <p>Feeling festive? Starbucks® Rewards members can get half off a drink on Thursday afternoons in December.</p>
            <a href='https://www.starbucks.com/account/create?_branch_match_id=1176537698390745851&utm_source=Web&utm_campaign=Homepage&utm_medium=Marketing&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXLy5JLEoqTc4u1kssKNDLyczL1jcyDjAKzDX1SypJAgCic1QXJgAAAA%3D%3D'>Learn More</a>
          </div>
          <div className='imgBox'>
            <img src={img1} className='starbucks'></img>
          </div>
        </div>
        <ul className='thumb'>
          <li><img src={thumb1}></img></li>
          <li><img src={thumb2}></img></li>
          <li><img src={thumb3}></img></li>
        </ul>
        <ul className='sci'>
          <li><a href='https://facebook.com/starbucks'><img src={facebook}></img></a></li>
          <li><a href='https://twitter.com/starbucks/'><img src={twitter}></img></a></li>
          <li><a href='https://instagram.com/starbucks'><img src={instagram}></img></a></li>
        </ul>
      </section>
      <hr></hr>
      <Footer />
    </div>
    
  );
}

export default App;
