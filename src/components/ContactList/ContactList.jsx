import React from "react";
import PropTypes from "prop-types";
import Contact from "./Contact/Contact";


// const ContactList = ({ contacts, filter }) => {
//  const  filteredContacts = contacts.filter ((contact) =>
//   contact.name.toLowerCase().includes(filter.toLowerCase())
// );
//    return (
//     <div className={css.primary}>
// <ul className={css.list}>
//         {contacts.map((contact) => (
//           <li key={contact.id}>
//             {contact.name} ({contact.number})
//           </li>
//         ))}
//       </ul>
//       </div>
//     );
// };

const ContactList =   ({ contacts, filter, deleteFunction }) => {
   return(
  <div >
    <ul>
        {contacts
        .filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
        .map((contact) => {
          return(
            <Contact key = {contact.id}>
              {contact.name} : {contact.number} {""}
              <button 
              id = {contact.id} 
              onClick={deleteFunction} 
              >
                Delete
                </button>
            </Contact>
          )
        }
          // <li key={contact.id}>
          //   {contact.name} ({contact.number})
          // </li>
        )}
    </ul>
  </div>
  );
};
 


ContactList.propTypes = {
  contact: PropTypes.array.isRequired,
  filter: PropTypes.string.isRequired,
  deleteFunction: PropTypes.func.isRequired,
};

export default ContactList;