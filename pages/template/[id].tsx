import Image from "next/image";
import { useRouter } from "next/router";
import Controller from "../../components/Controller";
import EditableTable from "../../components/EditableTable";

interface IProps {
  type: string;
}

/**
 * 模版编辑页面，包含了模板大类，小类 type.id
 */
export default function Template(props: IProps) {
  const router = useRouter();
  const { id } = router.query;
  const { type } = props;

  // table props
  const header = [
    { key: 1, name: "袖长" },
    { key: 2, name: "肩宽" },
  ];

  const body = [{ key: 1 }, { key: 2 }];

  return (
    <section className="container gap-8 columns-1">
      <Controller />
      <Image src={`/images/${id}.jpg`} width={400} height={400} />
      <EditableTable header={header} body={body} />
    </section>
  );
}
