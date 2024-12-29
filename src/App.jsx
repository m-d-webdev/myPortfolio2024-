import { useState } from 'react'
import { Router, RouterProvider } from 'react-router-dom'
import routes from './layoutRoutes/routes'
function App() {

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
