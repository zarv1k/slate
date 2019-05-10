import assert from 'assert'
import { Value } from 'slate'
import { fixtures } from 'slate-dev-test-utils'
import hyperprint from '../src/print'

describe('slate-hyperscript', () => {
  fixtures(__dirname, 'fixtures', ({ module }) => {
    const { input, output, options } = module
    const actual = input.toJSON(options)
    const expected = Value.isValue(output) ? output.toJSON() : output
    assert.deepEqual(actual, expected)
  })

  fixtures(__dirname, 'print', ({ module }) => {
    const { input, output, options } = module
    const actual = hyperprint(input, options)
    const expected = output.trim()

    assert.equal(actual, expected)
  })

  fixtures.skip(__dirname, 'decorations', ({ module }) => {
    const { input, output, expectDecorations } = module
    const actual = input.toJSON()
    const expected = Value.isValue(output) ? output.toJSON() : output
    assert.deepEqual(actual, expected)

    expectDecorations.forEach((decoration, i) => {
      Object.keys(decoration).forEach(prop => {
        assert.deepEqual(
          decoration[prop],
          input.decorations.toJS()[i][prop],
          `decoration ${i} had incorrect prop: ${prop}`
        )
      })
    })
  })
})
