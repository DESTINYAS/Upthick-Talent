import React from 'react'

const Loader = () => {
  return (
    <div>
      <div className="flex h-screen items-center justify-center bg-white">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
    </div>
    </div>
  )
}

export default Loader;
