/* @flow */

import React from 'react'
import renderer from 'react-test-renderer'
import TabOption from '../TabOption'

test('renders correctly', () => {
  const tree = renderer.create(<TabOption text="Tab value" />).toJSON()
  expect(tree).toMatchSnapshot()
})
