import { useEffect, useMemo, useState } from 'react'
import { Router, RouterProvider } from 'react-router-dom'
import routes from './layoutRoutes/routes';
import { checkMode } from './setting';
import { useDispatch ,useSelector} from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const { is_visible} = useSelector(e => e.img_zoomerReducer)

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
