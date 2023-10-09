import { useState } from "react"
const App = () => {

  const [color, setColor] = useState('black')
  return (
    <div className="w-full h-screen transition-all 0.3s" style={{backgroundColor: color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
   <div className="flex flex-wrap justify-center gap-3 bg-white rounded-2xl py-2 px-3">
    <button onClick={() => {setColor('red')}} className="px-4 py-2 rounded-2xl text-white" style={{backgroundColor: 'red'}}>Red</button>
    <button onClick={() => {setColor('green')}} className="px-4 py-2 rounded-2xl text-white" style={{backgroundColor: 'green'}}>Green</button>
    <button onClick={() => {setColor('blue')}} className="px-4 py-2 rounded-2xl text-white" style={{backgroundColor: 'blue'}}>Blue</button>
    <button onClick={() => {setColor('violet')}} className="px-4 py-2 rounded-2xl text-white" style={{backgroundColor: 'violet'}}>Pink</button>
    <button onClick={() => {setColor('aqua')}} className="px-4 py-2 rounded-2xl text-white" style={{backgroundColor: 'aqua'}}>Acqua</button>
   </div>
    </div>
  </div>
  )
}

export default App