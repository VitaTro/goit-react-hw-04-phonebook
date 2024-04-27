import { nanoid } from 'nanoid';
import { useEffect, useRef, useState } from 'react';
import ContactAdd from './ContactAdd/ContactAdd';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

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
  // // Стан відноситься до даних або властивостей, які потрібно відслідковувати в додатку
  const [contacts, setContacts] = useState([
    { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
    { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
    { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
    { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const isMounted = useRef(false);
  const Key = 'Contacts';

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
    const storedContacts = JSON.parse(localStorage.getItem('Key'));
    storedContacts && setContacts([...storedContacts]);
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      localStorage.setItem(Key, JSON.stringify(contacts));
    } else {
      isMounted.current = true;
    }
  }, [contacts]);

  // // перевірка контакту, чи вона є в базі даних чи ні
  //   checkContact = (newContact) => {
  //     const { contacts } = this.state;
  //     const isInBase = contacts.some(
  //       (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
  //     );
  //     return isInBase;
  //   };

  const checkContact = newContact => {
    const isInBase = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    return isInBase;
  };
  //   // якщо контакта немає з таким іменем, то йде додавання, якщо є то повідомлення
  // addNewContact = (newContact) => {
  //   const check = this.checkContact(newContact);
  //   if (!check) {
  //     const { contacts } = this.state;
  //     contacts.push(newContact);
  // this.setState({ contacts: contacts});
  // // при додаванні контакту всі дані відображаються в локал сторедж
  // localStorage.setItem('contacts', JSON.stringify(contacts));
  //   } else {
  //     // <Alert className={css.error} message={`${newContact.name} is already in contacts`} />
  //     alert  (`${newContact.name} is already in contacts`);
  //   }
  // };

  const addNewContact = newContact => {
    const check = checkContact(newContact);
    if (!check) {
      let actualContacts = contacts;
      actualContacts.push(newContact);
      setContacts([...actualContacts]);
    } else {
      alert(`${newContact.name} is already in contacts`);
    }

    // // фільтрування контактів
    // changeFilterValue = (evt) => {
    //   this.setState({ filter: evt.target.value });
    // };

    const changeFilterValue = e => {
      setFilter(e.target.value);
    };
    // // видалення контактів
    // deleteUser = (evt) => {
    //   const { contacts } = this.state;
    //   const filtered = contacts.filter((contact) => contact.id !== evt.target.id);
    //   this.setState({ contacts: filtered });
    //   // при видаленні контакту всі дані видаляються з локал сторедж
    //   localStorage.setItem('contacts', JSON.stringify(filtered));
    // };

    const deleteUser = e => {
      const filteredContacts = contacts.filter(
        contact => contact.id !== e.target.id
      );
      setContacts(filteredContacts);
    };

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactAdd onSubmit={addNewContact} />

        <h2>Contacts</h2>
        <Filter changeHandler={changeFilterValue} />
        <ContactList
          filter={filter}
          contacts={contacts}
          deleteFunction={deleteUser}
        />
      </div>
    );
  };
};

export default App;
