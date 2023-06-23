    import React from "react";
    // import uuid from 'react-uuid';
    const Contact = (props) => {
     
        const { id, name, email } = props.contacts;
     
        return(
            <div key= {id} className="content" >
               <div data-id={"id--" + id}  className={"header "+ name}>{name}</div>
                <div>{email}</div>
                
                <i className="trash alternate outline icon" style={{ color: "red", marginTop:"7px" }}
                onClick ={() => props.clickHandler(id)}
                ></i>
            </div>
        );
    }
    export default Contact;