import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { Provider } from 'react-redux'
import { render, screen } from '@testing-library/react'
import LoginForm from '../components/LoginForm'
import { store } from '../../../store/store'

const dataTestId = 'login-form'
describe('Form', () => {
  it('should render form', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm dataTestId={dataTestId} />
        </BrowserRouter>
      </Provider>
    )

    expect(screen.getByTestId(dataTestId)).toBeInTheDocument()
  })
})
