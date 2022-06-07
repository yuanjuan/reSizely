import React, { ChangeEvent } from "react";
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
    e: ChangeEvent<HTMLInputElement>,
    key: string | number,
    type: "CUSTOM" | "BODY"
  ) => {
    // TODO: 更新输入的单元格数据
    console.log("input value: ", e.target.value, key);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <input
                type="text"
                placeholder="Custom"
                onChange={(e) => save(e, "custom", "CUSTOM")}
              />
            </th>
            {header.map(({ key, name }) => (
              <th key={key}>{name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {body.map(({ key }) => (
              <td key={key}>
                <input type="text" onChange={(e) => save(e, key, "BODY")} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
