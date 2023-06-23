import React from "react";
import Contact from "./Contact";


const ContactList = (props) => {
    // console.log (props.contacts);
    const deleteHandler = (id) => {
        // console.log('id : ',id)
        // props.getContactId(id);
        console.log('id : ',id, props.getContactId(id))
    }

    // let data;
    const renderContactList = props.contacts.map((cantact) => {

    //    data = {
    //     'key':key,
    //     ...cantact  };
    return  <li key={cantact.id} className="item"><Contact contacts={cantact} clickHandler={deleteHandler} key={cantact.id} /></li>;
       
        // return  <li key={key} className="item"><Contact contacts={data} clickHandler={deleteHandler} key={key} /></li>;
    });
    return <div className="ui called list container"> {renderContactList}</div>;
}
export default ContactList;