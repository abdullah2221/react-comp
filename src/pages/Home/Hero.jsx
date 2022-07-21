import React, { useContext } from 'react'
import CommonPage from '../../components/commonPage'
import { countContext } from '../../context/CountContext'
function Hero() {
  const { myName } = useContext(countContext)


  return (
    <>
      <CommonPage text="Ths is HERO Section of Home  Page" />
      <h2 className='text-center'>{myName}</h2>
    </>

  )
}

export default Hero