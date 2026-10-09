import { useEffect, useRef, useState } from 'react';
import '../Assets/css/style.css';

const soundButtons = [
  ['helloBabies', 'Hello my babies', 'helloBabies.mp3', { color: 'white', backgroundColor: 'rgb(213, 73, 213)' }],
  ['SuckBalls', 'Suck my balls', 'suckMyBalls.mp3'],
  ['SugarPeas', 'Sugar Peas', 'sugarPeas.mp3', { color: 'rgb(79, 120, 17)', backgroundColor: 'greenyellow' }],
  ['TheyTookEverything', 'They took everything', 'thatWasEverything.mp3', { color: 'rgb(156, 36, 36)', backgroundColor: 'rgba(253, 253, 94, 0.862)' }],
  ['IDoWhatIWant', 'I do what I want', 'whatever.mp3'],
  ['IAmABaddieBaby', "I'm a baddie baby", 'ImABaddieBaby.mp3', { color: 'brown', backgroundColor: 'rgb(40, 198, 250)' }],
  ['screwYouGuys', 'Screw you guys Im goin home', 'ScrewYouGuys.mp3'],
  ['EVERYTHING', 'EVERYTHING', 'EVERYTHING.mp3', { color: 'rgb(187, 32, 32)', backgroundColor: 'rgb(53, 146, 227)' }],
  ['EverythingIsOkay', 'Everything Is Okay :)', 'EverythingIsOkay.mp3', { color: 'rgb(187, 32, 32)', backgroundColor: 'rgb(53, 146, 227)' }],
  ['Theykilledkenny', 'Oh my god they killed Kenny', 'KENNYYYYYYYY.mp3', { color: 'black', backgroundColor: 'rgb(255, 127, 7)' }],
  ['GoodBoyCatBug', 'Good Boy Catbug', 'goodBoyCatBug.mp3', { color: 'rgb(187, 32, 32)', backgroundColor: 'rgb(53, 146, 227)' }],
  ['DressedUp', 'I am dressed up', 'DressedUp.mp3', { color: 'white', backgroundColor: 'rgb(180, 45, 45)' }],
  ['MeWasBornThisWay', 'Me was born this way', 'BornThisWay.mp3', { color: 'white', backgroundColor: 'rgb(180, 45, 45)' }],
  ['DirtyWater', 'Dirty water', 'HomelessMan.mp3', { color: 'white', backgroundColor: 'rgb(180, 45, 45)' }],
];

const pages = [
  ['/', 'Home'],
  ['/things', 'Things'],
  ['/collection', 'Collection'],
  ['/stims', 'Stims'],
];

function Navigation({ currentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`nav${isOpen ? ' open' : ''}`}>
      <button className={`nav-toggle${isOpen ? ' open' : ''}`} onClick={() => setIsOpen(true)} aria-label="Open navigation">
        ☰
      </button>
      <ul className={`nav-links${isOpen ? ' open' : ''}`}>
        <button className="nav-toggle-open" onClick={() => setIsOpen(false)} aria-label="Close navigation">
          ☰
        </button>
        {pages.map(([path, label]) => (
          <li key={path}>
            <h1><a className={currentPage === path ? 'active' : ''} href={`#${path}`}>{label}</a></h1>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Home() {
  return (
    <>
      <p className="home-text">Welcome to the website!</p>
      <p className="home-text">This is a space where I (Marshall) can mess around and make things, because I am a loser nerd who took a deggree in software engineering :)</p>
      <p className="home-text">I will update this website periodically.</p>
      <iframe width="314" height="321" scrolling="no" className="nelly" title="Nelly pet" src="https://gify.pet/pet/pet.html?name=Nelly&dob=1782708205&gender=f&element=Water&pet=https%3A%2F%2Fartr2.pixilart.com%2Fcfr2848b603bc8aws3.png&map=sea.jpg&background=gify.jpg&tablecolor=%239c02b1&textcolor=black" />
      <div className="linkedin-card">
        <img src="/Assets/Images/Profile_pic.jpeg" alt="Profile picture" className="linkedin-avatar" />
        <div className="linkedin-content">
          <h3 className="name">Marshall Dunn</h3>
          <p className="headline">Software Engineering Student @ UNB</p>
          <p className="headline">Customer Service Representative @ OMISTA</p>
          <a href="https://ca.linkedin.com/in/marshall-robert-dunn" target="_blank" rel="noreferrer">View LinkedIn Profile</a>
        </div>
      </div>
    </>
  );
}

function Things() {
  const containerRef = useRef(null);
  const [positions, setPositions] = useState([]);

  const randomize = (index) => {
    const container = containerRef.current;
    if (!container) return;
    setPositions((current) => current.map((position, positionIndex) => positionIndex === index ? {
      x: Math.random() * Math.max(0, container.clientWidth - 80),
      y: Math.random() * Math.max(0, container.clientHeight - 80),
    } : position));
  };

  useEffect(() => {
    setPositions([0, 1, 2].map(() => ({
      x: Math.random() * Math.max(0, window.innerWidth - 80),
      y: Math.random() * Math.max(0, window.innerHeight - 180),
    })));
  }, []);

  return <div className="things" id="things" ref={containerRef}>
    {positions.map((position, index) => (
      <img key={index} src="/Assets/Images/miku.webp" alt="thing" className="move" onMouseEnter={() => randomize(index)} style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
    ))}
  </div>;
}

function Collection() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const unlock = () => {
    const name = window.prompt('What is your full name?');
    const question = window.prompt('Awtism?');
    const cat = window.prompt('What is my cats name?');
    if (name?.toLowerCase() === 'marshall dunn' && question?.toLowerCase() === 'nessie' && cat?.toLowerCase() === 'justice') {
      window.alert('You have unlocked spectial mode');
      setIsUnlocked(true);
      document.body.classList.add('rainbow');
      const audio = new Audio('/Assets/sound/suit.mp3');
      audio.play();
    } else {
      window.alert('nope');
    }
  };

  return <>
    <div className="collections"><ul /></div>
    <button className="password" onClick={unlock}>Click Here Please!</button>
    <div className={`nessie-box${isUnlocked ? ' open' : ''}`}>
      {[1, 2, 3].map((number) => <img key={number} src="/Assets/Images/nessie.webp" alt="" id={`ness${number}`} />)}
    </div>
  </>;
}

function Stims() {
  const audioRefs = useRef({});
  const playSound = (id) => {
    const audio = audioRefs.current[id];
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
  };

  return <div className="board">
    {soundButtons.map(([id, label, file, style]) => (
      <button key={id} data-sound={id} style={style} onClick={() => playSound(id)}>{label}</button>
    ))}
    {soundButtons.map(([id, , file]) => <audio key={file} ref={(audio) => { audioRefs.current[id] = audio; }} src={`/Assets/sound/${file}`} />)}
  </div>;
}

function App() {
  const [hash, setHash] = useState(window.location.hash || '#/');
  const currentPage = hash.slice(1) || '/';

  useEffect(() => {
    const updatePage = () => setHash(window.location.hash || '#/');
    window.addEventListener('hashchange', updatePage);
    return () => window.removeEventListener('hashchange', updatePage);
  }, []);

  const content = currentPage === '/things' ? <Things />
    : currentPage === '/collection' ? <Collection />
      : currentPage === '/stims' ? <Stims />
        : <Home />;

  useEffect(() => {
    document.title = pages.find(([path]) => path === currentPage)?.[1] || 'Home';
    if (currentPage !== '/collection') document.body.classList.remove('rainbow');
    document.body.classList.toggle('stims-page', currentPage === '/stims');
  }, [currentPage]);

  return <><Navigation currentPage={currentPage} />{content}</>;
}

export default App;
