/**
 * @jest-environment jsdom
 */
import React from 'react'
import Paginator from '../../features/randomUser/components/paginator'
import { render, screen } from '../../UnitTestConfig'

describe('Check can render', () => {
  test('Does Paginator Component rendered', () => {
    render(<Paginator setPaginate={() => null} />)
    expect(screen.getAllByTestId('paginator')).toBeTruthy()
  })
})
