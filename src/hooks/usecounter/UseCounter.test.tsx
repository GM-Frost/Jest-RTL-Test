import { renderHook, act } from '@testing-library/react'
import UseCounter from './UseCounter'

describe('UseCounter', () => {
  test('Should render the initial count', () => {
    const { result } = renderHook(UseCounter)
    expect(result.current.count).toBe(0)
  })

  test('Should accept and render the same intial count', () => {
    const { result } = renderHook(UseCounter, {
      initialProps: { initialCount: 10 },
    })
    expect(result.current.count).toBe(10)
  })

  test('Should increment the count', () => {
    const { result } = renderHook(UseCounter)
    act(() => result.current.increment()) //Act() Used for State Updates
    expect(result.current.count).toBe(1)
  })

  test('Should decrement the count', () => {
    const { result } = renderHook(UseCounter)
    act(() => result.current.decrement()) //Act() Used for State Updates
    expect(result.current.count).toBe(-1)
  })
})
