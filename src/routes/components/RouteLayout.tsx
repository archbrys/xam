import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './RequiredAuth'
import Login from '../../modules/Login'

function RouteLayout() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <div>Home Page</div>
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<div>No Page Found</div>} />
    </Routes>
  )
}

export default RouteLayout
