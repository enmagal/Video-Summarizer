import { useState } from 'react'

function App() {
  const [videoUrl, setVideoUrl] = useState("")
  const [summary, setSummary] = useState("")

  const handleSubmit = () => {
    console.log(videoUrl)
    setVideoUrl("")
  }

  return (
    < >
      <div className='flex flex-col justify-center items-center h-screen w-screen'>
        <h1 className='text-5xl text-center  font-bold text-red-500'>Video Summarizer</h1>
        <div className='mt-10 w-1/2 flex flex-col justify-center items-center'>
          <div className='w-full'>
            <label>Your Video Url</label>
            <input name='videoUrl' onChange={(url) => {setVideoUrl(url)}} className='border-2 border-gray-300 w-full h-14 rounded pl-4'/>
          </div>
          <button onClick={() => {handleSubmit()}} className='mt-10 px-5 py-3 rounded text-white bg-red-500 duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1'>Summarize</button>
        </div>
        <p>{summary}</p>
      </div>
    </>
  )
}

export default App
