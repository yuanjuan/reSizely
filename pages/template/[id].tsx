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

  return (
    <section className="container gap-8 columns-1">
      <Controller />
      <Image src={`/images/${id}.jpg`} width={400} height={400} />
      <EditableTable />
    </section>
  );
};
