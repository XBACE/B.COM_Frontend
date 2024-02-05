import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'

interface CountUpAnimationProps {
  endNumber: number
  sign: string
}

const CountUpAnimation: React.FC<CountUpAnimationProps> = ({ endNumber, sign }) => {
  return (
    <CountUp duration={2} end={endNumber} redraw={true} suffix={sign}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef}></span>
        </VisibilitySensor>
      )}
    </CountUp>
  )
}

export default CountUpAnimation
