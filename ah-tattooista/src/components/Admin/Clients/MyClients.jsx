import React, { useState, useEffect } from "react";
import MyClient from "./MyClient";
import Paginator from "../../common/Paginator";
import ModalPopUp from "../../common/ModalPopUp";
import AddClientForm from "../../forms/AddClientForm";

const MyClients = (props) => {
  //debugger;

  let [addClientMode, setAddClientMode] = useState(false);

  const toggleAddClientMode = () => {
    if (addClientMode) {
      setAddClientMode(false);
    } else {
      setAddClientMode(true);
    }
  }

  const closeModal = () => {
    setAddClientMode(false);
  }

  const myClients = props.myClients
      .map(myClient => {
        return (
            <MyClient
                key={myClient._id}
                myClient={myClient}
                showMyClientProfile={props.showMyClientProfile}
                deleteMyClient={props.deleteMyClient}
                pageSize={props.pageSize}
                currentPage={props.currentPage}
            />
        );
      });

  return (
      <>
        <div className="admin__cards-header">
          <Paginator
              totalCount={props.totalCount}
              pageSize={props.pageSize}
              currentPage={props.currentPage}
              onPageChanged={props.onPageChanged}
          />
          <button
            className="btn btn--light-bg"
            onClick={toggleAddClientMode}
          >
            Add Client
          </button>
        </div>
        <ul className="admin__cards-list list">
          { myClients }
        </ul>
        { addClientMode &&
          <ModalPopUp
            closeModal={closeModal}
          >
          <AddClientForm
            addClient={props.addClient}
            closeModal={closeModal}
          />
          </ModalPopUp>
        }
      </>
  );
};

export default MyClients;
