import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../utils/hooks/useAuth'
import Button from '../../../common/Button'

function Header() {
  const navigate = useNavigate()
  const auth = useAuth()

  return (
    <header className="flex justify-between px-5 py-4">
      <span className="self-center text-2xl font-semibold whitespace-nowrap">
        {auth.currentUser.userName}
      </span>
      <Button
        type="button"
        size="md"
        onClick={() => {
          auth.logout(() => navigate('/'))
        }}
      >
        Logout
      </Button>
    </header>
  )
}

export default Header
