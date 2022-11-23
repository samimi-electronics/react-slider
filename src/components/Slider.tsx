import { FC, useState } from "react";

export interface SliderDataItem {
  img: {
    src: string;
    alt: string;
  };
  link: string;
}

type SliderProps = { width?: string; height?: string; data: SliderDataItem[] };
const Slider: FC<SliderProps> = ({ width, height, data }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showControls, setShowControls] = useState<boolean>(false);
  const goRight = () => {
    if (currentIndex === data.length - 1) setCurrentIndex(0);
    else setCurrentIndex(currentIndex + 1);
  }
  const goLeft = () => {
    if (currentIndex === 0) setCurrentIndex(data.length - 1);
    else setCurrentIndex(currentIndex - 1);
  }
  const goToIndex = (index: number) => {
    setCurrentIndex(index);
  }
  return (
    <div className="w-[800px] h-[400px] flex flex-row items-center justify-center relative overflow-clip rounded-md drop-shadow-2xl" onMouseEnter={() => setShowControls(true)} onMouseLeave={() => setShowControls(false)}>
      {data.map((di, i) => (
        <a key={i} href={di.link} className={`${currentIndex === i ? 'opacity-100 w-full h-full' : 'opacity-0 w-0 h-0'} transition-all duration-200`} >
          <img className='w-full h-auto aspect-video object-cover' src={di.img.src} alt={di.img.alt} />
        </a>
      ))}
      <div className={`flex-row gap-2 absolute right-4 bottom-10 flex transition-all ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <div className="hover:-translate-y-1 hover:drop-shadow-xl transition-all h-10 w-10 rounded-full border border-stone-500 bg-white/80 cursor-pointer drop-shadow-md flex items-center justify-center" onClick={goLeft}>
          <svg className="w-5 h-5 rotate-180" viewBox="0 0 20 20">
            <path
              fill="black"
              opacity="0.8"
              d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
            ></path>
          </svg>
        </div>
        <div className="hover:-translate-y-1 hover:drop-shadow-xl transition-all h-10 w-10 rounded-full border border-stone-500 bg-white/80 cursor-pointer drop-shadow-md flex items-center justify-center" onClick={goRight}>
          <svg className="w-5 h-5" viewBox="0 0 20 20">
            <path
              fill="black"
              opacity="0.8"
              d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="flex-row gap-2 absolute right-5 bottom-4 flex">
        {data.map((di, i) => (
          <div key={i} className={`${currentIndex === i ? 'w-4 bg-white': 'w-1.5 bg-white/80 cursor-pointer hover:scale-105'} h-1.5 rounded-full transition-all duration-100`} onClick={() => goToIndex(i)}></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
