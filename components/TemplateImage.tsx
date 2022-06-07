import Image from "next/image";
import Link from "next/link";

interface ITemplate {
  src: string;
  feature: string[];
}

export default function TemplateImage(props: ITemplate) {
  const {src, feature} = props
  
  // 传递数据到模版页面，用来渲染尺码标维度
  // 如何利用Context来传递数据到子组件
  return (
    <>
      <Link href={`/template/${src}`}>
        <Image width={300} height={300} src={`/images/${src}.jpg`} />
      </Link>
    </>
  );
};
