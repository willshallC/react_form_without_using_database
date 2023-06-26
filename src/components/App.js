import './App.css';
import HeaderMenu from "./HeaderMenu";
import AddContact from './AddContact';
import ContactList from './ContactList';
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
// import {  Route, Routes } from "react-router-dom";

function App() {


//   let contactsss = [{
//     "name" : "test",
//     "email" : "test@gmail.com"

//   },
//   {
//     "name" : "gurpeet",
//     "email" : "gurp reet@gmail.com"
//    }
// ]; 
const [contact, setContact] = useState(()=>{  return [] }); 

  // const ary = ["hello", "hi","hola"];
  // let morning,hi;
  // let test= ['HI',...ary,'end text'];
  // console.log(test);
  // // [morning,hi] = ary;
  // const [number,setNumber] = useState(()=>{ return 1; });
  // const increment = () =>{
  //   setNumber(number+1);
  // }
  // const decrement = () =>{
  //   if(number > 0){
  //     setNumber(number-1);
  //   }
  // setNumber(prev => prev-4);

  const LOCAL_STORAGE_KEY = "contacts";

    const addContactHandler = (contacts) => {
      // const [name, email] = contacts; 
      // let temp = [...contactsss, contacts ];
      // const result = Object.values(contacts);
      //  console.log('testings : ',temp);
     
            setContact([...contact, {'id': uuidv4(), ...contacts} ]);
            // console.log('contact : ',contact)

         
             // contactsss = contact;
            // console.log('contactsss ',contacts)
           // console.log('contact app.js : ' ,contacts , contact);
    } 


    const deleteHandler = (id) => {
      console.log('id : ',id);
      const newContactList = contact.filter((contacts)=>{
        return contacts.id !== id;
      });
      
      // const newContactList = contact.filter((contacts, key)=>{
      //   return key !== id;
      // });
      setContact(newContactList);
     
      
          
          // console.log("chhecking",contact);
      // console.log(contact);
      // setContact([contact, newContactList ]);
    }

    useEffect(() =>{
      const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retrieveContact ) setContact(retrieveContact);
    }, []);
  
    useEffect(() =>{
      // console.log('thiss state length : ',contact.length);
      const retrieveContact1 = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(contact.length !== 0 ||  retrieveContact1 === null ){
        // console.log('retrieveContact1 : ',retrieveContact1.length)
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contact));
       }
      //  if(contact.id === 1) {
      //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([]));
      //  }
       
      console.log('thiss state out : ',contact);
      
    }, [contact]);
    


    return (
      <div className="App ui main container">
        <HeaderMenu />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList getContactId={deleteHandler} contacts={contact}/>
         {/* <Switch>
        <Route path="/" exact>
        <AddContact addContactHandler={addContactHandler} />
        </Route>
   
      
      </Switch> */}
           
        {/* <Route exact path="/contacts" render={(contact) => <ContactList getContactId={deleteHandler} {...contact} /> } /> */}
       
        {/* <Routes>
           <Route path="/" element={<AddContact  />} /> */}

            {/* <Route path="/contacts" element={<ContactList  />}/> */}
              
        {/* </Routes> */}
             </div>
    );
  }


  
export default App;
