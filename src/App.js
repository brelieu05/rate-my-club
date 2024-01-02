import './App.css';

function App() {
  return (
    <div>
      <div className='overlay'></div>
      <div className="background">
          <div className='navbar'>
            <a href='/' className='Logo'>RateMyClub</a>
            <div className='accountLinks'>
              <a href='/' className='SignUp'>Sign Up</a>
              <a href='/' className='SignIn'>Sign In</a>
            </div>
          </div>
        <div className="Main-Page">
          <input className='searchBar' placeholder='Type in your club...'/>
        </div>
      </div>
    </div>
  );
}

export default App;
