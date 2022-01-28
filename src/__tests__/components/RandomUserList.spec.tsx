/**
 * @jest-environment jsdom
 */
import RandomUserList from '../../features/randomUser/components/randomUser'
import { render, screen } from '../../UnitTestConfig'

describe('Check can render', () => {
  test('Does RandomUserList Component rendered', () => {
    render(<RandomUserList />)
    expect(screen.getAllByTestId('random-user-list')).toBeTruthy()
  })
})
