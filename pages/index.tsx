import type { NextPage } from "next";
import { useEffect, useState } from "react";
import TemplateImage from "../components/TemplateImage";
import { IMAGE_MAP_WITH_TYPE } from "../utils/data";

interface ICategory {
  imageType: string;
  feature: any[];
}

const Home: NextPage = () => {
  const [images, setImages] = useState<ICategory[]>([
    { imageType: "", feature: [] },
  ]);

  useEffect(() => {
    setImages(IMAGE_MAP_WITH_TYPE.get("all") as ICategory[]);
  }, []);

  return (
    <section className="pt-4">
      <ul className="container grid grid-cols-3 justify-evenly justify-items-center">
        {images.map(({ imageType, feature }) => (
          <li key={imageType}>
            <TemplateImage src={imageType} type={"all"} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Home;
