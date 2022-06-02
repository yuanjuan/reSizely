import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import { IMAGE_MAP_WITH_TYPE } from "../../utils/data";

export default () => {
  const router = useRouter();
  const { type } = router.query;

  const [categoryImages, setCategoryImages] = useState([]);

  useEffect(() => {
    const images = IMAGE_MAP_WITH_TYPE.get(type as string);
    console.log("images: ", images);
    if (images) {
      setCategoryImages(images);
    }
  }, [type]);

  return (
    <section className='mt-4'>
      <h1>{type}</h1>
      <div className='container'>
        {categoryImages.map((image) => (
          <Image
            key={image}
            width='200'
            height='200'
            src={`/template/${image}.jpg`}
            alt='template'
          />
        ))}
      </div>
    </section>
  );
};
