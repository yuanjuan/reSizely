import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import TemplateImage from '../components/TemplateImage'
import { IMAGE_MAP_WITH_TYPE } from '../utils/data'

interface ICategory {
  type: string;
  feature: any[];
}

const Home: NextPage = () => {
  const [images, setImages] = useState<ICategory[]>([{type: '', feature: []}])

  useEffect(() => {
    console.log('index: ', IMAGE_MAP_WITH_TYPE.get('all'))
    setImages(IMAGE_MAP_WITH_TYPE.get('all') as ICategory[])
  }, [])

  return (
  <section className='pt-4'>
    <ul className='container grid grid-cols-3 justify-evenly justify-items-center'>
      {images.map(({type, feature}) => (
          <li key={type}>
            <TemplateImage src={type} />
          </li>
        ))}
    </ul>
  </section>
  )
}

export default Home
