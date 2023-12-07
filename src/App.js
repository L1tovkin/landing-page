import './App.css';
import logo from './assets/logo.png';
import img1 from './assets/img1.png';
import thumb1 from './assets/thumb1.png';
import thumb2 from './assets/thumb2.png';
import thumb3 from './assets/thumb3.png';
import facebook from './assets/facebook.png';
import twitter from './assets/twitter.png';
import instagram from './assets/instagram.png';

const App = () => {
  return (
    <div>
      <section>
        <div className='circle'></div>
        <header>
        <a href='#'><img src={logo} alt='logo'></img></a>
        <div className='toggle'></div>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Menu</a></li>
          <li><a href='#'>What's New</a></li>
          <li><a href='#'>Contact</a></li>
        </ul>
        </header>
        <div className='content'>
          <div className='textBox'>
            <h2>It's not just a Coffee<br></br>It's <span>Starbucks</span></h2>
            <p>Feeling festive? Starbucks® Rewards members can get half off a drink on Thursday afternoons in December.</p>
            <a href='#'>Learn More</a>
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
          <li><a href='#'><img src={facebook}></img></a></li>
          <li><a href='#'><img src={twitter}></img></a></li>
          <li><a href='#'><img src={instagram}></img></a></li>
        </ul>
      </section>
    </div>
  );
}

export default App;
