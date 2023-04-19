import "./App.css";
import { Contact, contacts } from "./contacts.js";
import Entry from "./Entry.jsx";

function Emoji() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        <Entry />
      </dl>
    </div>
  );
}

function createCard(contact) {
  return (
    <Contact
      name={contact.name}
      key={contact.id}
      id={contact.id}
      src={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <Emoji />
    </div>
  );
}

export default App;
