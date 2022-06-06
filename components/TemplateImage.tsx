import Image from "next/image";
import Link from "next/link";

interface ITemplate {
  src: string;
}

export default (props: ITemplate) => {
  const {src} = props
  return (
    <>
      <Link href={`/template/${src}`}>
        <Image width={300} height={300} src={`/images/${src}.jpg`} />
      </Link>
    </>
  );
};
