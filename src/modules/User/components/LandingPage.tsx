import React from 'react'
import Header from './Header'
import AddUser from './AddUser'
import UserTable from './UserTable'

function LandingPage() {
  return (
    <main className="flex flex-col">
      <Header />
      <div className="flex flex-row flex-wrap px-5 gap-6">
        <AddUser />
        <UserTable />
      </div>
    </main>
  )
}

export default LandingPage
