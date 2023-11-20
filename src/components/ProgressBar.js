import React, { useEffect, useState } from 'react'
import ProgressBar from '@ramonak/react-progress-bar'
import { FaCheckCircle } from 'react-icons/fa'

export default function CustomProgressBar({ value }) {
  const [progressCompleted, setValue] = useState(value)
  const iconSize = 20
  const progressBarColor = '#6dce71'
  const iconPosition = `${(progressCompleted / 100) * 100}%`
  const spanPosition = `${(progressCompleted / 100) * 100 - 5}%`
  const progressBarHeight = 6

  useEffect(() => {
    setValue(value)
  }, [value])

  return (
    <>
      <span
        class="whitespace-nowrap"
        style={{ marginLeft: spanPosition, transition: 'margin-left 1s ease-in-out' }}
      >
        {progressCompleted}% geschafft
      </span>
      <div className='relative mt-4'>
        <FaCheckCircle
          size={iconSize}
          className='absolute -left-3 top-1/2 transform -translate-y-1/2 text-green-500 transition duration-1000 ease-in-out'
          style={{ left: iconPosition, transition: 'left 1s ease-in-out' }}
        />
        <ProgressBar
          completed={progressCompleted}
          height={progressBarHeight}
          bgColor={progressBarColor}
          customLabel='.'
        />
      </div>
    </>
  )
}
