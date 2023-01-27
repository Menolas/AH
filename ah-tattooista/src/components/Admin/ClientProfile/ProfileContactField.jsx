import React, { useState, useEffect } from 'react';

const ProfileContactField = (props) => {
  
  let [editMode, setEditMode] = useState(false);
  let [contactFieldValue, setContactFieldValue] = useState(props.contacts[props.contact]);

  useEffect(() => {
    setContactFieldValue(props.contacts[props.contact]);
  }, [props.contacts[props.contact]]);

  const activateEditMode = () => {
    setEditMode(true);
  }

  const onStatusChange = (e) => {
    setContactFieldValue(e.currentTarget.value);
  }

  const deactivateEditMode = () => {
    setEditMode(false);
    
    props.updateContactField(
      props.clientId,
      props.contact,
      contactFieldValue
    );
  }
  
  return (
    <li>
      <span>{props.contact}:&nbsp;</span>
      { !editMode &&
        <span
          onDoubleClick={ activateEditMode }
        >
          {props.contacts[props.contact] || "-------"}
        </span>
      }

      { editMode &&
      
        <div>
          <input
            value={ contactFieldValue }
            autoFocus={true}
            onChange={ onStatusChange }
            onBlur={ deactivateEditMode }
          />
        </div>
      }
    </li>
  );
  
}

export default ProfileContactField;
