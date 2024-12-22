import * as TuntasinAja from '../pages/Index'
import { Route, Routes } from 'react-router-dom'

export default function ReactRouter() {
  return (
    <Routes>
        <Route path='/' element={<TuntasinAja.Home/>} />
        <Route path='/home' element={<TuntasinAja.Home/>} />
        <Route path='/about' element={<TuntasinAja.About/>} />
        <Route path='/contact' element={<TuntasinAja.Contact/>} />
    </Routes>
  )
}
