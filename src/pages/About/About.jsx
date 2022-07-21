import React,{useContext} from 'react'
import CommonPage from '../../components/commonPage'
import { countContext } from '../../context/CountContext'
function About() {
  const {count} = useContext(countContext)
  console.log(count)
  return (
    <>
    <CommonPage text = "Ths is About Page"/>
    <h3 className="my-3 text-center">{count}</h3>

     </>
    
    
  )
}

export default About