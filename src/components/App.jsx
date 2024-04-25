import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { useFormValue } from "./hooks/useFormValue";

// class App extends Component {
//   constructor(props) {
//     super(props)
//      this.state = {
//     contacts: [
//       { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
//       { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
//       { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
//       { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//   }
//   }
const App = () => {
  // useState - це хук, який дозволяє нам відстежувати стан в функціональних компонентах.
  // Стан відноситься до даних або властивостей, які потрібно відслідковувати в додатку
const [contacts, setContacts] = useState([
  { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
    { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
    { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
    { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
]);
// useEffect - це хук, який дозволяє мені відстежувати стан в функціональних компонентах.
// Він дозволяє виконувати певні дії після render(),
// а також при оновленні стану або властивостей

 // як тільки "ладується" сторінка, то запускається оцей життєвий цикл.
// він дозволяє отримувати доступ до будь-яких посилань мого ДОМу
// componentDidMount() {
//   const storedContacts = localStorage.getItem('contacts') 
//   if (storedContacts) {
//     this.setState({ contacts: JSON.parse(storedContacts) });
//   }
// }
// componentDidUpdate(prevProps, prevState) {
//   if (this.state.contacts !== prevState.contacts) {
//     localStorage.setItem("contacts",JSON.stringify(this.state.contacts));
//   }
// }


useEffect(() => {
  const storedContacts = localStorage.getItem('contacts');
  if (storedContacts) {
    setContacts( JSON.parse(storedContacts) );
  }
}, []);

  const name = useFormValue('');
  const phone = useFormValue('');

  // const checkContact = (newContact) => {
  //   const { contacts } = this.state;
  //   const isInBase = contacts.some(
  //     (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase
  //   );
  //   return isInBase;
  //  };

// const checkContact = (newContact) => {
//   return contacts.some (
//     (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase
//   );
// };
//   const addNewContact = (newContact) => {
// const check = this.checkContact(newContact) 
//   if(!check) {
//     const { contacts } = this.state;
//     contacts.push(newContact);
//     this.seyState({ contacts });
//     localStorage.setItem('contacts', JSON.stringify(contacts));
//   } else {
//     alert (`${newContact.name} is already in contacts!`);
//      }
//   };

const addNewContact = (newContact) => {
  // if(!checkContact(newContact)) {
    setContacts([...contacts, newContact]);
    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
  // } else {
    // alert (`${newContact.name} is already in contacts!`);
  // }
};

  const deleteUser = (id) => {
    // const { contacts } = this.state;
    const filteredContacts = contacts.filter((contact) => contact.id !== id);
  // this.setState({ contacts: filtered });
  setContacts(filteredContacts);
  localStorage.setItem('contacts', JSON.stringify(filteredContacts));
  };
return (
<>
<div>
      <form >
        <div >
        <label htmlFor="user-name" >Name</label>
            <div>
            <input
           
        type="text"
        {...name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />    
            </div>
        </div>

      <div>
      <label  htmlFor="number" >Number</label>
         <div>
         <input
        
        type="tel"
       {...phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
     </div>
      </div>
     <button  type="submit" >Add contact</button>
      </form>
      </div>
</>
);
};
export default App;