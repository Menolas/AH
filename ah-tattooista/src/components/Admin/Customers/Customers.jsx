import React from "react";
import Paginator from "../../common/Paginator";
import Customer from "./Customer";

const Customers = (props) => {

  const customers = props.customers
    .map(customer => {
      return (
        <Customer
          key={customer._id}
          customer={customer}
          pageSize={props.pageSize}
          currentPage={props.currentPage}
          isStatusChanging={props.isStatusChanging}
          changeCustomerStatus={props.changeCustomerStatus}
          unChangeCustomerStatus={props.unChangeCustomerStatus}
          isCustomerDeletingInProcess={props.isCustomerDeletingInProcess}
          deleteCustomer={props.deleteCustomer}
          turnCustomerToClient={props.turnCustomerToClient}
        />
      );
  });

  return (
    <>
      <Paginator
        totalCount={props.totalCount}
        pageSize={props.pageSize}
        currentPage={props.currentPage}
        onPageChanged={props.onPageChanged}
      />
      <ul className="admin__cards-list list">
        {customers}
      </ul>
    </>
  );
};

export default Customers;
