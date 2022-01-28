/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { Provider } from 'react-redux'
import '@testing-library/jest-dom'
import { store } from './store/store'

const Wrapper: React.FC = ({ children }) => <Provider store={store}>{children}</Provider>
const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: Wrapper, ...options })

// re-export everything
export * from '@testing-library/react'

export { customRender as render }
