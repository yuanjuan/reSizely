import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IMAGE_MAP_WITH_TYPE } from "../../utils/data";
import Template from "../../components/TemplateImage";

interface ICategory {
  type: string;
  feature: any[];
}

export default () => {
  const router = useRouter();
  const { type } = router.query;

  const [categoryImages, setCategoryImages] = useState<ICategory[]>([
    { type: "", feature: [] },
  ]);

  useEffect(() => {
    // [
    //   { type: "8", feature: ["袖长", "胸围", "臂展"] },
    //   { type: "10", feature: ["修长"] },
    //   { type: "12", feature: ["胸围"] },
    //   { type: "22", feature: ["臂展"] },
    // ]
    const images = IMAGE_MAP_WITH_TYPE.get(type as string);
    console.log("images: ", images);
    if (images) {
      setCategoryImages(images);
    }
  }, [type]);

  return (
    <section className="pt-4">
      <h1>{type}</h1>
      <ul className="container grid grid-cols-3 justify-evenly justify-items-center">
        {categoryImages.map(({ type, feature }) => (
          <li key={type}>
            <Template src={type} />
          </li>
        ))}
      </ul>
    </section>
  );
};
