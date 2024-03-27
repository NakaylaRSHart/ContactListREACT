import { useEffect, useState } from 'react'
import './App.css'
import PeopleUnorderedList from './PeopleUnorderedList.jsx';

function App() {
  const [contactList, setContactList] = useState([]);

  const CONTACT_BASE_URL = 'https://jsonplaceholder.typicode.com';

  useEffect(() => {
    const getContactInfo = async() => {
      const response = await fetch(`${CONTACT_BASE_URL}/users`);
      const jsonObject = await response.json();
      setContactList(jsonObject);

      console.log(jsonObject);
    };
    getContactInfo();
  }, []);

  return (
    <div id='container'>
      <div id='header'>
         <h1>Contact List</h1>
      </div>

      <div id='peopleList'>
        <PeopleUnorderedList contactList={contactList} />
      </div>
    </div>


  )
}

export default App
