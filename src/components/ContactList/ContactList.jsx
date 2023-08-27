import { ContactCard } from './ContactCard';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(item => (
        <li key={item.id}>
          <ContactCard item={item} deletes={onDelete} />
        </li>
      ))}
    </ul>
  );
};
