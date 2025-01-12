```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* This route is causing the issue */}
        <Route path="/contact" element={<Contact />} >
          <Route path="form" element={<ContactForm/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Contact(){
  return(
    <div>
      <h1>Contact Us</h1>
      <p>You can reach us through this form or by sending an email.</p>
    </div>
  );
}

function ContactForm() {
  return (
    <form>
        {/* Form elements */}
    </form>
  );
}
export default App; 
```