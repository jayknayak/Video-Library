import React, { Component } from "react";
class TableHeader extends Component {
  raiseSort(column) {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.header === column.header) {
      sortColumn.order = sortColumn.order === "desc" ? "asc" : "desc";
    } else {
      sortColumn.header = column.header;
      sortColumn.order = "asc";
    }
    this.props.onSortEvent(sortColumn);
  }
  renderSortIcon = (column) => {
    const { sortColumn } = this.props;
    if (sortColumn.header === column.header) {
      return sortColumn.order === "asc" ? (
        <i className="fa fa-sort-asc"></i>
      ) : (
        <i className="fa fa-sort-desc"></i>
      );
    }
  };
  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map((column) => (
            <th
              key={column.header || column.key}
              onClick={() => this.raiseSort(column)}
              className="clickable"
            >
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
