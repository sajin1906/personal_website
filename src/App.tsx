import Message from './Message';
import Sajin from './assets/Sajin.jpg'
import Logo from './assets/bat.png'
import Basketball from './assets/basketball.jpg'
import Coding from './assets/coding.jpg'
import Dance from './assets/dance.jpg'
import Star from './assets/star.jpg'
import Running from './assets/running.jpg'
import Github from './assets/github.jpg'
import Linkedin from './assets/linkedin.jpg'
import './index.css'

function App() {
  return (
    // Nav bar styling 
    <div style={{width: '100%'}}>
      <nav style={{
        background: 'transparent',
        width: '100%',
        position: 'fixed',
        color: '#fff',
        padding: '1.5rem 1.5rem',
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'center',
        top: 0,
        zIndex: 1000,
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
        <span style={{ fontWeight: '500', fontSize: '1.2rem', color:'#000000'}}>SAJIN</span>

        <button
        onClick={() => {
        const section = document.getElementById('About Me');
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
        }}
        >About Me</button>
        
        <button
        onClick={() => {
        const section = document.getElementById('hobbies');
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
        }}
        >
        Hobbies
        </button>
        <button 
        onClick={() => {
        const section = document.getElementById('Contact')
        if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        }
        }}
        >
        Contact
        </button>

      

      </nav>
      <div id="About Me">
        <h1 style={{ paddingTop: '80px', fontWeight: 400, fontSize: '3Rem', color: '#333', textAlign: 'center'}}> Welcome,  வணக்கம்!</h1>
      </div>


      {/*HOME SECTION*/}

      {/*Divsion of text and picture*/}
      <div style={{ padding: '20px', minHeight: '100vh'}}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10rem'}}>
          <div style={{ flex: 1}}>
            <h1 style = {{ fontWeight: 400, paddingLeft: '60px', fontSize: '2.2rem', color: '#000000', textAlign: 'left'}}> Who am I? </h1>
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
            marginTop: '2rem',
            transform: 'rotate(2deg)'
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


      {/*HOBBIES SECTION*/}
      <hr style={{border: '2px solid #000000', margin: '0'}} />
      <div id="hobbies" className='animated-gradient' style={{paddingTop: '20px', paddingBottom: '50px' }}>
        <div  style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '2.5rem', paddingTop: '2rem'}}>
          <img src={Running} alt="Running" style={{width: '70px', height: '70px', marginBottom: '60px', rotate: '25deg'}} />
          <h1 style={{fontSize: '3.5rem', textAlign:'center', color: '#000000', fontWeight: 490, marginBottom: '60px', marginTop: 0}}>
            Hobbies.
          </h1>
          <img src={Star} alt="Star" style={{width: '90px', height: '90px', marginBottom: '60px', rotate: '-25deg'}} />
          
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', gap: '6rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Basketball} alt="Basketball" style={{ width: '400px', height: '350px', borderRadius: '20px' }} />
            <h1 style={{ fontSize: '2.5rem', margin: 0, color: '#000000', paddingTop: '15px' }}>
              <span style={{ borderBottom: '4px solid #000', fontWeight: 200 }}>
                Basketball
              </span>
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Coding} alt="Coding" style={{ width: '400px', height: '350px', borderRadius: '20px' }} />
            <h1 style={{ fontSize: '2.5rem', margin: 0, color: '#000000', paddingTop: '15px' }}>
              <span style={{ borderBottom: '4px solid #000', fontWeight: 200 }}>
                Coding
              </span>
            </h1>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img src={Dance} alt="Dance" style={{ width: '400px', height: '350px', borderRadius: '20px' }} />
            <h1 style={{ fontSize: '2.5rem', margin: 0, color: '#000000', paddingTop: '15px' }}>
              <span style={{ borderBottom: '4px solid #000', fontWeight: 200 }}>
                Dance
              </span>
            </h1>
          </div>
        </div>
      </div>
      {/* Contact Me section below the Hobbies section */}
      <hr style={{border: '1px solid #000000', margin: '0'}} />
      <div style={{ paddingTop: '5px',backgroundColor: '#5D5962'}}>
          <h1 style={{fontSize: '3rem', textAlign:'left', color: '#FAFAFA', fontWeight: 300, paddingTop: '20px', paddingLeft: '60px'}}>Contact Me</h1>
      <h3 style={{fontSize: '1.5rem', textAlign:'left', color: '#FAFAFA', fontWeight: 200, paddingLeft: '60px'}}> You can use any of these socials to reach me.  If you wanna coollabrate, inquire or just simply chat, I am open to talk! </h3>
      <div id ="Contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', paddingTop: '20px', backgroundColor: '#5D5962'}}>
          <a href="https://github.com/sajin1906"> <h3 style={{fontSize: '1.5rem', textAlign:'center', color: '#FAFAFA', fontWeight: 200, display: 'flex', alignItems: 'center', gap: '5px'}}>
            <img src={Github} alt="Github" style={{ width: '30px', height: '30px', marginRight: '10px', marginTop: '10px' }} /> 
            Follow on Github    
          </h3></a>
          <a href="https://www.linkedin.com/in/sajin-somaskanthan-804089334/"> <h3 style={{fontSize: '1.5rem', textAlign:'center', color: '#FAFAFA', fontWeight: 200, display: 'flex', alignItems: 'center', gap: '5px'}}>
            <img src={Linkedin} alt="Linkedin" style={{ width: '30px', height: '30px', marginRight: '10px', marginTop: '10px' }} /> 
            Follow on LinkedIn
          </h3></a>
      </div>
        
      </div>
  </div>

  );
}

export default App