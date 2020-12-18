import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  //Creating array: [1,2,...,pagesCount]
  const pages = _.range(1, pagesCount + 1);
  const pageItemClass = "page-item";
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={
              (page === currentPage
                ? pageItemClass + " active"
                : pageItemClass) + " clickable"
            }
            // style={{ cursor: "pointer" }}
          >
            <a
              onClick={() => onPageChange(page)}
              className="page-link"
              href="/#"
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
