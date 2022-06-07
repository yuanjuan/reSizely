import { debounce, findIndex } from "lodash";
import React, { ChangeEvent } from "react";

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
  value?: string | number;
}

interface IEditableProps {
  header: IHeaderCellProps[];
  body: IBodyCellProps[][];
}

/**
 * 可编辑table
 * 可以编辑的cell
 * @param props
 * @constructor
 */
const EditableTable = (props: IEditableProps) => {
  const { header, body } = props;

  // debounce the call
  const save = debounce((
    e: ChangeEvent<HTMLInputElement>,
    key: string | number,
    type: "CUSTOM" | "BODY"
  ) => {
    // TODO: 更新数据源， 目标数据源为二维数组的某个数据
    for (let i =0; i < body.length; i++ ) {
      const _index = findIndex(body[i], ({key: _k}) => _k === key)
      if (_index !== -1) {
        body[i][_index] = {key: body[i][_index].key, value: e.target.value}
      }
    }

    console.log('body update: ', body)
  }, 350);

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
          {body.map((item, index) => (
            <tr key={index}>
              {item.map(({ key }) => (
                <td key={key}>
                  <input type="text" onChange={(e) => save(e, key, "BODY")} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EditableTable;
