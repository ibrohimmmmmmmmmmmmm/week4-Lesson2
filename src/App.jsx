import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layout/layout'
import { Suspense } from 'react'
import {Blog,Home,Contact,Services} from "./router/router"
export default function App() {
  const router = createBrowserRouter ([
      {
        path: "/",
        element: <Layout />,
        children: [
          {
  index: true,
  element: (
    <Suspense fallback={<div>Load...</div>}>
      <Home />
    </Suspense>
  )
}
,
          {
            path : "/Blog" ,
            element : (
              <Suspense fallback={<div>Load...</div>}>
                <Blog />
              </Suspense>
            )
          },
          {
            path : "/Services" ,
            element : (
              <Suspense fallback={<div>Load...</div>}>
                <Services />
              </Suspense>
            )
          },
          {
            path : "/Contact" ,
            element : (
              <Suspense fallback={<div>Load...</div>}>
                <Contact />
              </Suspense>
            )
          }
              ]
      }
  ])
  return <RouterProvider router={router} />
}
