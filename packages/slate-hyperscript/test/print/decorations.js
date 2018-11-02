/** @jsx h */

import h from '../helpers/h'

const input = (
  <value>
    <document>
      <paragraph>
        Hello, <highlight>world</highlight>!
      </paragraph>
    </document>
  </value>
)

const output = `
<value>
  <document>
    <paragraph>
      Hello, <highlight>world</highlight>!
    </paragraph>
  </document>
</value>
`

export { input, output }
