import React from 'react'

export default function NextBtn({ setShowType }) {
  return (
    <button className='bg-[#3f7cf1] py-2 px-10 rounded-md text-white mr-3'>
      <button
        className='flex-row inline-flex font-bold gap-1'
        onClick={setShowType}
      >
        Zurück
        <img
          src={`/assets/img/next.svg`}
          className=' rotate-180 text-white'
          alt=''
        />
      </button>
    </button>
  )
}
