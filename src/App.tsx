import { FC, useState } from 'react'
import Slider, { SliderDataItem } from './components/Slider'

function App() {

  const sliderItems: SliderDataItem[] = [
    { img: { src: "1.jpg", alt: "Image #1" }, link: "#" },
    { img: { src: "2.jpg", alt: "Image #2" }, link: "#" },
    { img: { src: "3.jpg", alt: "Image #3" }, link: "#" },
    { img: { src: "1.jpg", alt: "Image #1" }, link: "#" },
    { img: { src: "2.jpg", alt: "Image #2" }, link: "#" },
    { img: { src: "3.jpg", alt: "Image #3" }, link: "#" },
  ];

  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <Slider data={sliderItems} />
      <h1 className='mt-2 font-thin text-xl text-stone-500'>React & Typescript Slider</h1>
    </div>
  )
}

export default App
