import { useState } from 'react'
import './App.css'
import ColorPicker from './Components/ColorPicker';
import colorimage from '../src/assets/color-picker.png'

function App() {

  const [color, setColor] = useState('#93c6fc');

  const getColor = (value) => {
    setColor(value);
  }

  return (
    <>
      <div className='text-center my-7 w-full'>
        <h1 className='md:text-[35px] text-[30px] font-bold text-white'>Color Picker</h1>
        <p className='md:text-[22px] text-[19px] text-white mt-1 font-medium flex gap-2'>
          Choose Your Perfect Color Palette
          <span>
            <img className='w-7' src={colorimage} alt="" />
          </span>
        </p>
      </div>
      <div className='flex justify-center'>
        <div className='bg-white shadow-lg p-4 rounded-md flex flex-col items-center'>
          <div className='w-72 h-72 rounded-sm mb-4' style={{ backgroundColor: `${color}` }}></div>
          <ColorPicker getcolor={getColor} />
        </div>
      </div>
    </>
  )
}

export default App;
