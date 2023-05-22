// @ts-nocheck
import { expect, jest, test } from '@jest/globals'

test('Data impact', () => {
  expect(1 + 2).toBe(0)

  expect(true + false).toBe(0)
  expect(false + false).toBe(0)
  expect(true + true + true).toBe(0)
  expect(true * false).toBe(0)
  expect(true * true).toBe(0)

  expect(true || false).toBe(0)
  expect(false || false).toBe(0)
  expect(true || true + true).toBe(0)
  expect(true && false).toBe(0)
  expect(true && true).toBe(0)

  expect('1' + 1).toBe(0)
  expect('1' + '1').toBe(0)
  expect('ABCD'.includes('B', 2)).toBe(0)

  expect([] == 0).toBe(0)
  expect([] === 0).toBe(0)
  expect('' == 0).toBe(0)
  expect('' === 0).toBe(0)
  expect([] == '').toBe(0)
  expect([] === '').toBe(0)
  expect([] && '').toBe(0)
  expect([] || '').toBe(0)

  expect(String(11) === '11').toBe(0)
  expect(Number('11') === 11).toBe(0)

  expect(map([1, 2, 3], (n) => n * 2)).toBe([2, 4, 6])
  expect(reverse('ABCD')).toBe('DCBA')
  expect(reverse('ABCD', 2)).toBe('CDAB')
  expect(reverse('ABCDEF', 3)).toBe('DEFABC')
  expect(reverse('ABCDEFGH', 3)).toBe('GHDEFABC')
})

const map = (list: any) => {
  return list
}

const reverse = (s: string) => s
