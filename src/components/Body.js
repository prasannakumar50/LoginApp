import React from 'react'
import Login from './Login'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import { RouterProvider } from 'react-router-dom'
import VerificationPage from './VerificationPage'
import SignupPage from './SignUpPage'
import Dashboard from './Dashboard'


const Body = () => {

    const appRouter = createBrowserRouter([
        {
            path : "/",
            element: <Login isSignInForm={true} />
        },
        {
            path : "/browse",
            element : <Browse />
        },
        {
            path : "/verification",
            element : <VerificationPage />
        },
        {
          path : "/signup",
          element : <SignupPage />
      },
      {
        path: '/login', 
        element: <Login isSignInForm={false} />
      },
      {
        path: '/dashboard', 
        element: <Dashboard />
    }
    ])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
