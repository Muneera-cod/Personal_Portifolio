import React from 'react'
import { DotLoader } from 'react-spinners'
function Loading() {
  return (
    <div className='min-h-screen min-w-full flex items-center justify-center'>
         <DotLoader
         color='#578E7E'
        
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}

export default Loading