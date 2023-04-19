import './App.css';
import {Contact, contacts} from './contacts.js';
import Heading from "./Heading.jsx";

function createCard (contact) {
  return (
    <Contact name={contact.name}
      key={contact.id}
      id={contact.id}
      src= {contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  )
}


function App() {
  return (
    <div>
      <Heading/>
      {contacts.map(createCard)}      
      
    </div>
  );
}

export default App;
