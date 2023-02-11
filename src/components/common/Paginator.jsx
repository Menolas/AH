import React from "react";

const Paginator = (props) => {
  //debugger

  let pagesCount = Math.ceil(props.totalCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  pages = pages
    .map(page => {
      return (
        <li
          key={page}
          className={props.currentPage === page ? "pagination__item currentPage" : "pagination__item"}
          onClick={() => { props.onPageChanged(page) }}>
          {page}
        </li>
      );
    });
  
  return (
    <div className="pagination">
      <ul className="list pagination__list">
        { pages }
      </ul>
    </div>
  );
}

export default Paginator;
