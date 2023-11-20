import React from 'react'

export default function QuestionItem({ icon, title, setSelectItem, index, selectItem }) {

  const getClassName = () => {
    if (selectItem == index) return "flex md:flex-col flex-row item-wrapper items-center shadow-2xl rounded-md transition duration-600 ease-in-out bg-white cursor-pointer item-wrapper-hoverd";
    return "flex md:flex-col flex-row item-wrapper items-center shadow-2xl rounded-md transition duration-600 ease-in-out bg-white cursor-pointer";
  }

  return (
    <div
      key={index}
      className={getClassName()}
      onClick={() => setSelectItem(index)}
    >
      <div className='item-img-wrapper md:w-full w-auto md:h-full h-[60px] flex justify-center md:px-10 px-3 md:py-4 py-1'>
        <img src={`/assets/img/${icon}`} alt='' className='md:h-auto' />
      </div>
      <div className='w-full item-title-wrapper flex md:justify-center justify-start md:items-start items-center md:h-[80px] h-full item-title md:rounded-b-sm rounded-none md:pl-0 pl-3'>
        <p className='!text-black'>{title}</p>
      </div>
    </div>
  )
}
