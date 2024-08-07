import Header from './Header';
import SignUp from './SignUp';
import './App.css';
import Footer from './Footer';

function Homepage() {
    return (
      <div className='bg-gray-100  b h-screen w-full'>
        <Header/>
     <SignUp/>
     <Footer/>
      </div>
    );
  }
  
  export default Homepage;
   