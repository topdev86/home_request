import React from 'react'
import QuestionItem from './QuestionItem'
import NextBtn from './NextBtn'

const homeData = [
  {
    icon: 'ja.svg',
    title: 'Ja',
  },
  {
    icon: 'nein.svg',
    title: 'Nein',
  },
  {
    icon: 'anderes.svg',
    title: 'Weiß nicht',
  },
]
export default function Dormer({
  setShowType,
  setPreShow,
  selectItem,
  setSelectItem,
}) {
  const handleSelectItem = (item) => {
    setSelectItem(item)
    setShowType(2)
  }
  return (
    <div className='flex-col xl:px-20 md:px-20 lg:px-20 px-5'>
      <div className='flex-col'>
        <p className='title-md mt-2 !text-black'>
          Besitzt Ihr Haus Gauben oder Dachfenster?
        </p>
      </div>

      <div className='flex-col gap-4'>
        <div className='mt-7 justify-between grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
          {homeData.map((item, idx) => (
            <QuestionItem
              index={idx}
              icon={item.icon}
              title={item.title}
              setSelectItem={handleSelectItem}
              selectItem={selectItem}
            />
          ))}
        </div>
        <div className='flex mt-7 justify-between'>
          <button
            className='flex-row inline-flex text-[#5f5f68] font-bold gap-1'
            onClick={setPreShow}
          >
            <img src={`/assets/img/back.svg`} alt='' />
            Zurück
          </button>
          {selectItem != null && <NextBtn setShowType={setShowType} />}
        </div>
      </div>
    </div>
  )
}
