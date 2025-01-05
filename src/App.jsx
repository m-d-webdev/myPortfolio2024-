import { useEffect, useMemo, useState } from 'react'
import { Router, RouterProvider } from 'react-router-dom'
import routes from './layoutRoutes/routes';
import { check_bg, checkMode } from './setting';

import { useDispatch, useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const { is_visible } = useSelector(e => e.img_zoomerReducer)


  const Primary_actions = useMemo(() => {
    return () => {
      dispatch(checkMode())
      dispatch(check_bg())
    }
  }, [])

  useEffect(() => {
    Primary_actions();
    window.addEventListener("beforeunload", (e) => {
      // e.preventDefault();
      history.pushState({}, "", "/"); // Change the path
    })
    window.addEventListener("unload", () => {
      window.location.href = "/";
    });
  }, [])


  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
