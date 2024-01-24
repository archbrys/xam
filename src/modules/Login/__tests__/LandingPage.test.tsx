import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import LandingPage from '../components/LandingPage'
import { store } from '../../../store/store'

const dataTestId = 'login-page'
describe('Login', () => {
  it('should render landing page', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LandingPage dataTestId={dataTestId} />
        </BrowserRouter>
      </Provider>
    )

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument()
  })
})
