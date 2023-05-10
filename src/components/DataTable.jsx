import { useState } from "react";
import { EditIcon } from "./EditIcon";
import { DeleteIcon } from "./DeleteIcon";

export const DataTable = ({ data, onEdit, onDelete }) => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleRowClick = (row) => {
    if (selectedRow && selectedRow.id === row.id) {
      setSelectedRow(null);
    } else {
      setSelectedRow(row);
    }
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr
            key={row.id}
            onClick={() => handleRowClick(row)}
            className={
              selectedRow && selectedRow.id === row.id ? "selected" : ""
            }
          >
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.price}</td>
            <td>{row.amount}</td>
            <td className="table-action">
              <div onClick={() => onEdit(row)}>
                <EditIcon />
              </div>
              <div onClick={() => onDelete(row)}>
                <DeleteIcon />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
