/** @jsx h */

import h from '../h'

const input = (
  <value>
    <document>
      <block type="image" data={{ 0: 'foo' }} />
    </document>
  </value>
)

const output = `
<value>
    <document>
        <block data={{ '0': 'foo' }} type="image" />
    </document>
</value>
`

export { input, output }
