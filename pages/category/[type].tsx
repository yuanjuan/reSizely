import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGE_MAP_WITH_TYPE } from "../../utils/data";
import Template from "../../components/TemplateImage";

export default function Type()  {
  const router = useRouter();
  const { type } = router.query;

  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    const images = IMAGE_MAP_WITH_TYPE.get(type as string);
    if (images) {
      // @ts-ignore
      setCategoryImages(images);
    }
  }, [type]);

  return (
    <section className='mt-4'>
      <h1>{type}</h1>
      <ul className='container'>
        {categoryImages.map((image) => (
          <li key={image}>
            <Template src={image} />
          </li>
        ))}
      </ul>
    </section>
  );
};
