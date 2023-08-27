export const ContactCard = ({ item: { name, number, id }, deletes }) => {
  return (
    <>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => deletes(id)}>Delete</button>
    </>
  );
};
