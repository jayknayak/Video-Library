import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  render() {
    const {
      data,
      columns,
      itemKeyProperty,
      columnKeyProperty,
      columnHeaderProperty,
      columnContentProperty,
    } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item[itemKeyProperty]}>
            {columns.map((column) => (
              <td
                key={
                  item[itemKeyProperty] +
                  (column[columnHeaderProperty] || column[columnKeyProperty])
                }
              >
                {column[columnContentProperty]
                  ? column[columnContentProperty](item)
                  : _.get(item, column[columnHeaderProperty])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

TableBody.defaultProps = {
  itemKeyProperty: "_id",
  columnKeyProperty: "key",
  columnHeaderProperty: "header",
  columnContentProperty: "content",
};

export default TableBody;
