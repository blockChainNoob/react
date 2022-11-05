import React from "react";


const ContactCard = (props) => {

    const {id, name, email} = props.contact; /*Destructuring*/

    return(
        <div className="ui item">
                <i className="left floated user circle huge icon"></i>
                <div className="content">
                    <div className="ui header" style={{margin: '5px 0'}}>{name}</div>
                    <div style={{margin: '5px 0'}}>{email}</div>
                </div>
                <a><i className="right floated trash large icon" 
                    style={{ color: '#000', marginTop: '-35px'}}
                    onClick={() => props.clickHandler(id)}>
                </i></a>
        </div>
    )
};

export default ContactCard;