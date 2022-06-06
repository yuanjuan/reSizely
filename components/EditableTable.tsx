import React from "react";

/**
 * cell元素具体内容，此处为动态的列名
 */
interface Item {
  key: string;
}

/**
 * 可编辑表格cell props
 */
interface EditableCellProps {
  title: React.ReactNode;
  editable: boolean;
  children: React.ReactNode;
  dataIndex: keyof Item;
  record: Item;
  handleSave: (record: Item) => void;
}

/**
 * 可编辑table
 * 可以编辑的cell
 * @param props
 * @constructor
 */
const EditableTable = (props: any) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>
            <input type="text" placeholder="Custom"/>
          </th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text"/>
          </td>
          <td>
            <input type="text"/>
          </td>
          <td>
            <input type="text"/>
          </td>
          <td>
            <input type="text"/>
          </td>
        </tr>
      </tbody>
    </table>
  )
}

export default EditableTable
