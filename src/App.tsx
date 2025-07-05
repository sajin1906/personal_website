import Message from './Message';
import Sajin from './assets/Sajin.jpg'
import Logo from './assets/bat.png'
import Basketball from './assets/basketball.jpg'
import Coding from './assets/coding.jpg'
import Dance from './assets/dance.jpg'

function App() {
  return (
    // Nav bar styling 
    <div style={{width: '100%'}}>
      <nav style={{
        width: '100%',
        background: '#393C3D',
        color: '#fff',
        padding: '1.5rem 1.5rem',
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center'
      }}> 
        {/*Nav bar styling*/}
        <img
          src = {Logo}
          alt = "Logo"
          style={{
            width: '55px',
            height: '40px',
            borderRadius: '25px'
          }}
        />
        <span style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>Sajin's Portfolio</span>

        <a href="https://google.com"> < button type="button" className="btn btn-dark">Home</button></a>
        <a href="https://google.com"> < button type="button" className="btn btn-dark">About Me</button></a>
        <a href=" #"> < button type="button" className="btn btn-dark">Contact</button></a>
      

      </nav>


      {/*HOME SECTION*/}

      {/*Divsion of text and picture*/}
      <div style={{ padding: '20px', backgroundColor: '#f8f9fa', minHeight: '100vh', minWidth: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ flex: 1}}>
            <h1 style={{ fontWeight: 450, fontSize: '3Rem', color: '#333', textAlign: 'center', marginLeft: '450px' }}> Welcome! வணக்கம்!</h1>
            <h1 style = {{ fontWeight: 400, paddingLeft: '80px',paddingTop: '10px', fontSize: '2.5rem', color: '#000000', textAlign: 'left'}}> Who am I? </h1>
            <Message/>
          </div>
          <div>
            <img
            src={Sajin}
            alt="Sajin"
            style={{
            textAlign: 'right',
            display: 'block',
            width: '425px',
            height: '325px',
            borderRadius: '20px',
            marginRight: '10rem',
            marginTop: '10rem',
            transform: 'rotate(5deg)'
            }}
          />
        </div>
      </div>
        <div style={{padding: '30px', marginTop: '5rem',backgroundColor:'#AAA7AD', borderRadius: '20px' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 190, color: '#2A0000', textAlign: 'center' }}>
            "It's nice to be important, but it's more important to be nice. "
          </h1>
          <h1 style={{ fontSize: '1.1rem', fontWeight: 190, color: '#000000', textAlign: 'center' }}>
            - John Templeton
          </h1>
        </div>
      </div>
      {/*ABOUT ME SECTION*/}
      <div style={{padding: '10px', backgroundColor: '#D3D3D3', minHeight: '50vh', minWidth: '100vw' }}>
      <h1 style={{fontSize: '3.5Rem', textAlign:'center', color: '#000000', fontWeight:'250'}}>
        Hobbies
      </h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap:"6rem" }}>
        <img src={Basketball} alt="Basketball" style={{width: '380px', height: '400px', borderRadius: '20px'}} />
        <img src={Coding} alt="Coding" style={{width: '400px', height: '350px', borderRadius: '20px'}} />
        <img src={Dance} alt="Dance" style={{width: '400px', height: '300px', borderRadius: '20px'}} />

      </div>



      </div>

    </div>
  );
}

export default App;