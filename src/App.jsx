import { useEffect, useMemo, useState } from 'react'
import { Router, RouterProvider } from 'react-router-dom'
import routes from './layoutRoutes/routes';
import { checkMode } from './setting';
import { useDispatch } from 'react-redux';
function App() {
  const dispatch = useDispatch();

  const Primary_actions = useMemo(() => {
    return () => {
      dispatch(checkMode())
    }
  }, [])

  useEffect(() => Primary_actions(), [])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
