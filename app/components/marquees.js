'use client'

import Marquee from 'react-fast-marquee'

export const MarqueeText = ({direction='left', speed='100', repeat=1, classes, text}) => {

  return(
    <div className="w-full">
      <Marquee gradient={false} direction={direction} speed={speed} className="w-full overflow-y-hidden">
        {[...Array(repeat)].map((e, i) => (
          <span key={i} className={`tracking-wide font-bold text-black uppercase mr-14 ${classes}`}>{text}</span>
        ))}
      </Marquee>
    </div>

  )
}
