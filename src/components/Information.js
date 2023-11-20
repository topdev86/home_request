import React, { useState } from 'react'
import clsx from 'clsx'
import NextBtn from './NextBtn'

export default function Information({
  setShowType,
  setPreShow,
  selectItem,
  setSelectItem,
  handleSubmit,
  setData,
  data,
}) {
  // const [data, setData] = useState({})

  const [nameError, setNameError] = useState(false)
  const [telefonnummerError, setTelefonnummerError] = useState(false)
  const [postleitzahlError, setPostleitzahlError] = useState(false)
  const [stadtError, setStadtError] = useState(false)
  const [strasseError, setStrasseError] = useState(false)
  const [hausnummerError, setHausnummerError] = useState(false)

  const setHandleSubmit = () => {
    if (!invalidData(data)) {
      return false
    } else {
      handleSubmit()
    }
  }

  const invalidData = (info) => {
    let flag = true
    if (data.name === '') {
      setNameError(true)
      flag = false
    }

    if (data.telefonnummer === '') {
      setTelefonnummerError(true)
      flag = false
    }

    if (data.postleitzahl === '') {
      setPostleitzahlError(true)
      flag = false
    }

    if (data.stadt === '') {
      setStadtError(true)
      flag = false
    }

    if (data.strasse === '') {
      setStrasseError(true)
      flag = false
    }

    if (data.hausnummer === '') {
      setHausnummerError(true)
      flag = false
    }

    return flag
  }

  const onFocusName = () => {
    setNameError(false)
  }

  const onFocusTelefonnummer = () => {
    setTelefonnummerError(false)
  }

  const onFocusPostleitzahl = () => {
    setPostleitzahlError(false)
  }

  const onFocusStadt = () => {
    setStadtError(false)
  }

  const onFocusStrasse = () => {
    setStrasseError(false)
  }

  const onFocusHausnummer = () => {
    setHausnummerError(false)
  }
  return (
    <div className='flex-col justify-center border-t border-t-white'>
      <div className='flex-row justify-center'>
        <div className='w-full h-[150px] flex flex-col pt-6 bg-[#000D19] items-center text-white'>
          <p className='text-base !text-white'>
            Eine Solaranlage spart Ihnen ca.
          </p>
          <p className='md:text-xl text-base mt-2.5 !text-white'>
            25.000 - 30.000 € Stromkosten
          </p>
        </div>
      </div>
      <div className='flex-col w-[80%] m-auto justify-center mt-4'>
        <p className='text-md text-center !text-black'>
          Gratulation, das Angebot ist in Ihrer Region noch verfügbar! Wir
          senden Ihnen gerne kostenlose Informationen zu.
        </p>
        <div className='w-[70%] m-auto'>
          <div class='w-full'>
            <div class='mb-4 mt-3'>
              <label
                class='block text-gray-700 text-sm font-bold mb-2'
                for='username'
              >
                Anrede
              </label>
              <div className='flex-row grid grid-cols-2'>
                <div class='flex items-center mb-4'>
                  <input
                    id='default-radio-1'
                    type='radio'
                    value=''
                    name='default-radio'
                    checked={data.anrede === 0}
                    onChange={(e) => {
                      let temp = data
                      temp['anrede'] = 0
                      setData({ ...temp })
                    }}
                    class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    for='default-radio-1'
                    class='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Herr
                  </label>
                </div>
                <div class='flex items-center mb-4'>
                  <input
                    id='default-radio-2'
                    type='radio'
                    value=''
                    name='default-radio'
                    checked={data.anrede === 1}
                    onChange={(e) => {
                      let temp = data
                      temp['anrede'] = 1
                      setData({ ...temp })
                    }}
                    class='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                  />
                  <label
                    for='default-radio-2'
                    class='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
                  >
                    Frau
                  </label>
                </div>
              </div>
            </div>

            <div class='mb-4'>
              <div className='flex-row gap-3 pb-2'>
                <label
                  class='text-gray-700 text-sm font-bold mb-2'
                  for='username'
                >
                  Name
                </label>
                {nameError && (
                  <span className='mt-2 ml-4 text-sm text-red-500'>
                    Bitte Vor- und Nachnamen angeben
                  </span>
                )}
              </div>
              <input
                className={clsx(
                  'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  {
                    'border-red-300 text-red-500 focus:border-red-600 focus:ring-red-600':
                      nameError,
                    'border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-600 focus:ring-blue-600':
                      !nameError,
                  },
                )}
                id='name'
                type='text'
                name='name'
                placeholder='Arthur dsd'
                onFocus={onFocusName}
                onChange={(e) => {
                  let temp = data
                  temp['name'] = e.target.value
                  setData({ ...temp })
                }}
              />
            </div>
            <div class='mb-4'>
              <div className='flex-row gap-3 pb-2'>
                <label
                  class='text-gray-700 text-sm font-bold mb-2'
                  for='username'
                >
                  Telefonnummer
                </label>
                {telefonnummerError && (
                  <span className='mt-2 ml-4 text-sm text-red-500'>
                    Bitte Vor- geben Sie eine Telefonnummer ein
                  </span>
                )}
              </div>
              <input
                className={clsx(
                  'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  {
                    'border-red-300 text-red-500 focus:border-red-600 focus:ring-red-600':
                      telefonnummerError,
                    'border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-600 focus:ring-blue-600':
                      !telefonnummerError,
                  },
                )}
                id='telefonnummer'
                type='text'
                name='telefonnummer'
                placeholder='+49 176 57765780'
                onFocus={onFocusTelefonnummer}
                onChange={(e) => {
                  let temp = data
                  temp['telefonnummer'] = e.target.value
                  setData({ ...temp })
                }}
              />
            </div>
            <div class='mb-4'>
              <div className='flex-row gap-3 pb-2'>
                <label
                  class='text-gray-700 text-sm font-bold mb-2'
                  for='username'
                >
                  Postleitzahl
                </label>
                {postleitzahlError && (
                  <span className='mt-2 ml-4 text-sm text-red-500'>
                    Bitte Vor- geben Sie eine Postleitzahl ein
                  </span>
                )}
              </div>
              <input
                className={clsx(
                  'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  {
                    'border-red-300 text-red-500 focus:border-red-600 focus:ring-red-600':
                      postleitzahlError,
                    'border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-600 focus:ring-blue-600':
                      !postleitzahlError,
                  },
                )}
                id='postleitzahl'
                type='text'
                name='postleitzahl'
                placeholder='12277'
                onFocus={onFocusPostleitzahl}
                onChange={(e) => {
                  let temp = data
                  temp['postleitzahl'] = e.target.value
                  setData({ ...temp })
                }}
              />
            </div>
            <div class='mb-4'>
              <div className='flex-row gap-3 pb-2'>
                <label
                  class='text-gray-700 text-sm font-bold mb-2'
                  for='username'
                >
                  Ort
                </label>
                {stadtError && (
                  <span className='mt-2 ml-4 text-sm text-red-500'>
                    Bitte Vor- geben Sie eine Ort ein
                  </span>
                )}
              </div>
              <input
                className={clsx(
                  'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                  {
                    'border-red-300 text-red-500 focus:border-red-600 focus:ring-red-600':
                      stadtError,
                    'border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-600 focus:ring-blue-600':
                      !stadtError,
                  },
                )}
                id='stadt'
                name='stadt'
                type='text'
                placeholder='Berlin'
                onFocus={onFocusStadt}
                onChange={(e) => {
                  let temp = data
                  temp['stadt'] = e.target.value
                  setData({ ...temp })
                }}
              />
            </div>
            <div className='flex-row grid grid-cols-3 gap-3'>
              <div class='mb-4 col-span-2'>
                <div className='flex-row gap-3 pb-2'>
                  <label
                    class='text-gray-700 text-sm font-bold mb-2'
                    for='username'
                  >
                    Straße
                  </label>
                </div>
                <input
                  className={clsx(
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'border-red-300 text-red-500 focus:border-red-600 focus:ring-red-600':
                        strasseError,
                      'border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-600 focus:ring-blue-600':
                        !strasseError,
                    },
                  )}
                  id='strasse'
                  name='strasse'
                  type='text'
                  placeholder='Föttingerzeile'
                  onFocus={onFocusStrasse}
                  onChange={(e) => {
                    let temp = data
                    temp['strasse'] = e.target.value
                    setData({ ...temp })
                  }}
                />
                {strasseError && (
                  <span className='mt-2 text-sm text-red-500'>
                    Bitte Vor- geben Sie eine Straße ein
                  </span>
                )}
              </div>
              <div class='mb-4 col-span-1'>
                <div className='flex-row gap-3 pb-2'>
                  <label
                    class='text-gray-700 text-sm font-bold mb-2'
                    for='username'
                  >
                    Hausnummer
                  </label>
                </div>
                <input
                  className={clsx(
                    'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline',
                    {
                      'border-red-300 text-red-500 focus:border-red-600 focus:ring-red-600':
                        hausnummerError,
                      'border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-600 focus:ring-blue-600':
                        !hausnummerError,
                    },
                  )}
                  id='hausnummer'
                  name='hausnummer'
                  type='text'
                  placeholder='39'
                  onFocus={onFocusHausnummer}
                  onChange={(e) => {
                    let temp = data
                    temp['hausnummer'] = e.target.value
                    setData({ ...temp })
                  }}
                />
                {hausnummerError && (
                  <span className='mt-2 text-sm text-red-500'>
                    Bitte Vor- geben Sie eine Adresse ein
                  </span>
                )}
              </div>
            </div>
            <div class='flex items-center w-full justify-between'>
              <button
                class='bg-[#02FF83] h-[50px] text-[#171717] w-full font-bold rounded-3xl py-2 px-4 focus:outline-none focus:shadow-outline'
                type='button'
                onClick={() => setHandleSubmit()}
              >
                Ja, das ist mein Hausdach.
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex mt-7 justify-between px-20'>
        <button
          className='flex-row inline-flex text-[#5f5f68] font-bold gap-1'
          onClick={setPreShow}
        >
          <img src={`/assets/img/back.svg`} alt='' />
          Zurück
        </button>
        {selectItem && <NextBtn setShowType={setShowType} />}
      </div>
    </div>
  )
}
