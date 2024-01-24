import React from 'react'
import LoginForm from './LoginForm'
import Card from '../../../common/Card'

function LandingPage({ dataTestId }: { dataTestId: string }) {
  return (
    <main
      data-testid={dataTestId}
      className="flex justify-center items-center h-screen"
    >
      <section className="bg-gray-5">
        <Card>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
            Login
          </h1>
          <LoginForm dataTestId="login-form" />
        </Card>
      </section>
    </main>
  )
}

export default LandingPage
