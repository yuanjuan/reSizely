import Image from "next/image";
import { useRouter } from "next/router";

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
    <section>
      <h1>当前类型: {type}</h1>
      <div>TOP CONTROL</div>
      <Image src={`/images/${id}.jpg`} width={400} height={400} />
      <div>CONFIG TABLE</div>
    </section>
  );
};
