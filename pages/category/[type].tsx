import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGE_MAP_WITH_TYPE } from "../../utils/data";
import Template from "../../components/TemplateImage";

export default () => {
  const router = useRouter();
  const { type } = router.query;

  const [categoryImages, setCategoryImages] = useState<string[]>([]);

  useEffect(() => {
    const images = IMAGE_MAP_WITH_TYPE.get(type as string);
    if (images) {
      setCategoryImages(images as string[]);
    }
  }, [type]);

  return (
    <section className='pt-4'>
      <h1>{type}</h1>
      <ul className='container grid grid-cols-4'>
        {categoryImages.map((image) => (
          <li key={image} className='px-2'>
            <Template src={image} />
          </li>
        ))}
      </ul>
    </section>
  );
};
