import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ex01Components from './components/Ex01Components'
import A01ThirdComponents from './assignments/Day 01/A01ThirdComponents'
import Ex03JsxDemo from './components/Ex03JsxDemo'
import A02DeveloperInfo from './assignments/Day 01/A02DeveloperInfo'
import A03StudentMarks from './assignments/Day 01/A03StudentMarks'
import Ex04ArraysDemo from './components/Ex04ArraysDemo'
import A01ArrayMethods from './assignments/Day 02/A01ArrayMethods'
import Ex05ConditionalRendering from './components/Ex05ConditionalRendering'
import StudentIdComponent from './components/Ex06ImportExport' // default import 
import { StudentNameComponent, StudentScoreComponent } from './components/Ex06ImportExport' //named import
import ProductInfo, { ProductPrice, ProductStock } from './assignments/Day 02/A02ProductComponent'
import Ex07StylingDemo from './components/Ex07StylingDemo'
import Ex08BootstrapDemo from './components/Ex08BootstrapDemo'
import Ex09Images from './components/Ex09Images'
import PropsDemo from './components/PropsDemo/PropsDemo'
import StudentProfile from './components/PropsExample/StudentProfile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <StudentProfile/>
      {/* <Ex01Components/> */}
      {/* <A01ThirdComponents/> */}
      {/* <Ex03JsxDemo/> */}
      {/* <A02DeveloperInfo/> */}
      {/* <A03StudentMarks/> */}
      {/* <Ex04ArraysDemo/>  */}
      {/* <A01ArrayMethods/> */}
      {/* <Ex05ConditionalRendering/> */}
      {/* <StudentIdComponent/>
      <StudentNameComponent/>
      <StudentScoreComponent/> */}

      {/* <ProductInfo/>
      <ProductPrice/>
      <ProductStock/> */}

      {/* <Ex07StylingDemo/> */}
      {/* <Ex08BootstrapDemo/> */}
      {/* <Ex09Images/> */}

      {/* <PropsDemo/> */}

    </>
  )
}

export default App
