import React, { useState, useEffect } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

import ProgressBar from './components/ProgressBar'
import Roof from './components/Roof'
import Dormer from './components/Dormer'
import Information from './components/Information'
import Slide from '@mui/material/Slide'
import { insertData } from './hooks/home'

export default function Main() {
  const [showType, setShowType] = useState(0)
  const [selectRoofItem, setSelectRoofItem] = useState(null)
  const [selectDormerItem, setSelectDormerItem] = useState(null)
  const [progressValue, setProgressValue] = useState(10)

  const [data, setData] = useState({
    dachform: '',
    dachfenster: '',
    anrede: 0,
    name: '',
    telefonnummer: '',
    postleitzahl: '',
    stadt: '',
    strasse: '',
    hausnummer: '',
  })

  useEffect(() => {
    if (showType === 0) {
      setProgressValue(10)
    } else if (showType === 1) {
      setProgressValue(50)
    } else if (showType === 2) {
      setProgressValue(95)
    }
  }, [showType])

  useEffect(() => {
    if (selectRoofItem) {
      let temp = data
      temp['dachform'] = selectRoofItem
      setData({ ...temp })
    }
  }, [selectRoofItem])

  useEffect(() => {
    if (selectDormerItem) {
      let temp = data
      temp['dachfenster'] = selectDormerItem
      setData({ ...temp })
    }
  }, [selectDormerItem])

  const handleSubmit = async () => {
    const result = await insertData(data)
    if (result) {
      alert('success')
    } else {
      alert('error')
    }
  }
  return (
    <div className='flex-row justify-center container m-auto max-w-[930px] overflow-hidden'>
      <div className='flex-row bg-[#FAFAFA]'>
        <div
          className='flex-row px-20 pt-5 pb-4'
          style={{
            backgroundColor: showType == 2 ? '#000D19' : '',
            color: showType == 2 ? 'white' : '',
          }}
        >
          <ProgressBar value={progressValue} />
        </div>
        <div
          className='pt-10 px-20'
          style={{ display: showType == 2 ? 'none' : 'block' }}
        >
          <p className='title-sm'>
            Kostenloser Solarstrom-Check in einer Minute.
          </p>
        </div>
        <div className='relative w-full'>
          <Carousel
            selectedItem={showType}
            showIndicators={false}
            showArrows={false}
            showStatus={false}
          >
            <div>
              <Roof
                setShowType={() => setShowType(1)}
                selectItem={selectRoofItem}
                setSelectItem={setSelectRoofItem}
              />
            </div>
            <div>
              <Dormer
                setShowType={() => setShowType(2)}
                setPreShow={() => setShowType(0)}
                selectItem={selectDormerItem}
                setSelectItem={setSelectDormerItem}
              />
            </div>
            <div>
              <Information
                data={data}
                setData={setData}
                setPreShow={() => setShowType(1)}
                handleSubmit={handleSubmit}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}
