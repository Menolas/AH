import React from 'react';
import avatar from '../../../assets/img/avatar.webp';
import yalkash from '../../../assets/img/yalkash.jpg';
import Preloader from '../../common/Preloader';
import ProfileContactField from './ProfileContactField';
import fileUpload from 'express-fileupload';

const Profile = (props) => {
  //debugger;
  if (!props.profile) {
    return <Preloader />
  }

  const contacts = Object.keys(props.profile.contacts).map(contact => {
    return (
      <ProfileContactField
        key={contact}
        clientId={props.profile._id}
        contacts={props.profile.contacts}
        contact={contact}
        updateContactField={props.updateContactField}
      />
    );
  });

  const onAvatarPhotoSelected = (e) => {
    debugger;
    console.log(e.target.files[0]);

    if (e.target.files.length) {
      const file = e.target.files[0];
      file.mv('../uploads/avatars' + file.name);
      props.saveClientAvatar(props.profile._id, file);
    }
  }

  const Avatar = props.profile.avatar !== null
      ? `../public/uploads/avatars/${props.profile.avatar}`
      : avatar;

  return (
    <div className="client-profile">
      <div className="client-profile__header">
        <div className="client-profile__avatar form__file-input-wrap">
          <img src={Avatar} alt={props.profile.fullName} />
          <input
            type={"file"}
            name="avatar"
            onChange={onAvatarPhotoSelected}
          />
        </div>
        <div className="client-profile__details">
          <span className="client-profile__name">
            {props.profile.fullName}
          </span>
          <div className="client-profile__contacts">
            <ul className="list admin__card-contacts-list">
              { contacts }
            </ul>
          </div>
        </div>
        <div className="client-profile__action-btns">
          <button>
            Edit
          </button>
          <button>
            Delete
          </button>
        </div>
      </div>
      <div className="client-profile__gallery">
        <ul className="client-profile__gallery-list list">
          <li><img src={yalkash} alt="This client tattoo" /></li>
          <li><img src={yalkash} alt="This client tattoo" /></li>
          <li><img src={yalkash} alt="This client tattoo" /></li>
          <li><img src={yalkash} alt="This client tattoo" /></li>
        </ul>
      </div>
    </div>
  );
};

/* <li key={contact}>
    <span>{contact}:&nbsp;</span>
    <span>{props.profile.contacts[contact]}</span>
  </li> */

export default Profile;
