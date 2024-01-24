import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './RequiredAuth'
import Login from '../../modules/Login'
import User from '../../modules/User'

function RouteLayout() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <User />
          </RequireAuth>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<div>No Page Found</div>} />
    </Routes>
  )
}

export default RouteLayout
