import React, { useState } from 'react'
import QuestionItem from './QuestionItem'
import NextBtn from './NextBtn'

const homeData = [
  {
    icon: 'satteldach.svg',
    title: 'Satteldach',
  },
  {
    icon: 'flachdach.svg',
    title: 'Flachdach',
  },
  {
    icon: 'pultdach.svg',
    title: 'Pultdach',
  },
  {
    icon: 'anderes.svg',
    title: 'Anderes',
  },
]

export default function Roof({ setShowType, selectItem, setSelectItem }) {
  const handleSelectItem = (item) => {
    setSelectItem(item)
    setShowType(1)
  }
  return (
    <div className='flex-col xl:px-20 md:px-20 lg:px-20 px-5'>
      <div className='flex-col'>
        <p className='title-md mt-2 !text-black'>
          Welche Dachform hat Ihr Haus?
        </p>
      </div>

      <div className='flex-col gap-4'>
        <div className='mt-7 justify-between grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6'>
          {homeData.map((item, idx) => (
            <QuestionItem
              key={idx}
              index={idx}
              icon={item.icon}
              title={item.title}
              setSelectItem={handleSelectItem}
              selectItem={selectItem}
            />
          ))}
        </div>
        <div className='flex mt-7 justify-end'>
          {selectItem != null && <NextBtn setShowType={setShowType} />}
        </div>
      </div>
    </div>
  )
}
