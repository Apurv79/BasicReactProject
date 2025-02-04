import { useState } from 'react'


function App() {
 const [color, setColor] = useState('olive')
  return (
    
    <div className='w-full h-screen flex flex-col justify-center items-center' style={{backgroundColor: color}}>
        
      <div className='flex justify-center items-center h-full'>
        <div className='bg-white p-3 rounded-full shadow-lg fixed bottom-0 my-8 px-4'>
         <button className='px-3 py-3 bg-red-600 rounded-full mx-2 ' onClick={() => setColor('red')}>Red</button>
         <button className='px-3 py-3 bg-blue-600 rounded-full mx-2 ' onClick={() => setColor('blue')}>BLue</button>
         <button className='px-3 py-3 bg-green-600 rounded-full  mx-2 ' onClick={() => setColor('green')}>Green</button>
         <button className='px-3 py-3 bg-yellow-600 rounded-full mx-2 ' onClick={() => setColor('yellow')}>Yellow</button>
         <button className='px-3 py-3 bg-gray-600 rounded-full mx-2 ' onClick={() => setColor('gray')}>Gray</button>
         <button className='px-3 py-3 bg-black text-white rounded-full mx-2 ' onClick={() => setColor('black')}>Black</button>
         <button className='px-3 py-3 bg-orange-600 rounded-full mx-2 ' onClick={() => setColor('orange')}>Orange</button>
         <button className='px-3 py-3 bg-pink-600 rounded-full mx-2 ' onClick={() => setColor('pink')}>Pink</button>
        </div>
      </div>
           
     </div>

  )
}

export default App
