import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import TemplateImage from '../components/TemplateImage'
import { IMAGE_MAP_WITH_TYPE } from '../utils/data'

const Home: NextPage = () => {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    setImages(IMAGE_MAP_WITH_TYPE.get('all') as string[])
  }, [])

  return (
  <section className='pt-4'>
    <ul className='container grid grid-cols-4'>
      {images.map((image) => (
          <li key={image} className='px-1'>
            <TemplateImage src={image} />
          </li>
        ))}
    </ul>
  </section>
  )
}

export default Home
