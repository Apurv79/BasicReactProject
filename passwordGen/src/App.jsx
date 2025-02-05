import { useState , useCallback ,useEffect , useRef } from 'react'
import { toast, ToastContainer } from "react-toastify";



function App() {
  const[length, setLength] = useState(8)
  const[numberallowed, setNumberallowed] = useState(false)
  const[specialallowed, setSpecialallowed] = useState(false)
  const[password, setPassword] = useState('')
  
 const passref=useRef(null)

 const copyPasswordToClipboard = () => {
  if (!password) {
    toast.error("No password to copy!");
    return;
  }
  passref.current?.select();
  passref.current?.setSelectionRange(0, length);
  window.navigator.clipboard.writeText(passref.current.value);
  toast.success("Copied to clipboard!");
};


  const passwordGen = useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let num="0123456789"
    if(numberallowed){
      str+=num
    } 
    if(specialallowed){
      str+="!@#$%&"
    }
    for(let i=0; i<length; i++){
      pass+=str.charAt(Math.floor(Math.random()*str.length))
    }
    setPassword(pass)
  } ,[length, numberallowed, specialallowed]) 

  // const copyPasswordToClipboard =()=>{
  //   passref.current?.select()
  //   passref.current?.setSelectionRange(0,length)
  //     window.navigator.clipboard.writeText(passref.current.value)
  // }


  useEffect(()=>{passwordGen()},[passwordGen ,length, numberallowed, specialallowed])

  return (

    <>
     <ToastContainer /> 
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700 ' >
      <h1 className=' text-white  text-center p-2'>PASSWORD GENERATOR</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" 
          value={password}
          className=' py-1 px-3  w-full  outline-none rounded'
          placeholder='Your Password Here'
          readOnly
          ref={passref}
          
          
          />
          <button className='bg-blue-600 p-2 text-white cursor-pointer hover:bg-blue-800 rounded'
          onClick={copyPasswordToClipboard}>
            Copy</button>

          </div>
         <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 outline-none shadow-none border border-transparent' >
            <input
             type="range" 
             min={8}
             max={20}
             className='cursor-pointer'
             onChange={(e)=>setLength(e.target.value)}
             
             />
             <label>Length :{length}</label>
           </div>
           <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numberallowed}
              onChange={()=>setNumberallowed((prev)=>!prev
              )}
              id='numbers'
              />
              <label for="numbers">Numbers</label>
           </div>
           <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked  ={specialallowed}
              onChange={()=>setSpecialallowed((prev)=>!prev
              )}
              id='special'
              />
              <label for="special">Characters</label>
           </div>
         </div>

      </div>
       
    </>
  )
}

export default App
