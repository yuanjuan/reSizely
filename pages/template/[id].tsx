import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { cloneDeep } from 'lodash'


import Controller from "../../components/Controller";
import EditableTable from "../../components/EditableTable";

interface IProps {
  type: string;
}

let count = 0

/**
 * 模版编辑页面，包含了模板大类，小类 type.id
 */
export default function Template(props: IProps) {
  const router = useRouter();
  const { id } = router.query;

  // table header css
  // 这个数据是跟图片类型绑定的，需要写到配置里，前期可以模拟
  const header = [
    { key: 1, name: "袖长" },
    { key: 2, name: "肩宽" },
  ];

  // body cell data
  const body = [
    [{key: 0}, {key: 1, name: 'custom'}, { key: 2 }, { key: 3 }], // row 1
    [{key: 4}, {key: 5, name: 'custom'}, { key: 6 }, { key: 7 }], // row 1
  ];

  const [tableBody, setTableBody] = useState<any>(body)

  // 新增行, key值可以有更好的方案，比如自增数字，或者uuid
  const add = () => {
    const newTableBody = cloneDeep(tableBody)
    // TODO: there are better way to generate n data
    newTableBody.push([{key: 10}, {key: 11}, {key: 12}, {key: 13}])
    setTableBody(newTableBody)
  }

  return (
    <section className="container gap-8 columns-1">
      <Controller />
      <Image src={`/images/${id}.jpg`} width={400} height={400} />
      <section>
        <button onClick={add}>Add</button>
        <EditableTable header={header} body={tableBody} />
      </section>
      <button className="py-3 px-10 rounded-full bg-sky-500 text-white my-4">Generate</button>
    </section>
  );
}
