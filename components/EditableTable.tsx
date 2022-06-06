import React, { FormEventHandler } from "react";
import { renderIntoDocument } from "react-dom/test-utils";

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

interface IHeaderCellProps {
  key: string | number;
  name: string;
}

interface IBodyCellProps {
  key: string | number;
}

interface IEditableProps {
  header: IHeaderCellProps[];
  body: IBodyCellProps[];
}

/**
 * 可编辑table
 * 可以编辑的cell
 * @param props
 * @constructor
 */
const EditableTable = (props: IEditableProps) => {
  const { header, body } = props;

  const save = (
    e: FormEventHandler<HTMLInputElement>,
    key: string | number
  ) => {
    // 更新输入的单元格数据
    console.log("xxx", e.target.value, key);
  };

  return (
    <table className="table-auto container">
      <thead>
        <tr>
          <th>0</th>
          <th>
            <input type="text" placeholder="Custom" />
          </th>
          {header.map(({ key, name }, index) => (
            <th key={key}>{name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <input type="text" />
          </td>
          <td>
            <input type="text" />
          </td>
          {body.map(({ key }, index) => (
            <td key={key}>
              <input type="text" onChange={(e) => save(e, key)} />
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};

export default EditableTable;
