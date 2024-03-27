const PeopleUnorderedList = ({contactList}) => {

  
  return(
    <ul>
    {contactList.map(singleContact => (
      <li key={singleContact.id}>
        <div>Name:</div>{singleContact.name} <div>Email:</div>{singleContact.email}, <div>Phone:</div>{singleContact.phone},<div>Address:</div> {singleContact.address.street}, {singleContact.address.suite}, {singleContact.city}, {singleContact.zipcode}.join(" ");
      </li>
    ))}
  </ul>
);
};

export default PeopleUnorderedList;