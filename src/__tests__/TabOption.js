/* @flow */
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import TabOption from '../TabOption'

describe('<TabOption />', () => {
  it('should render TabOption', () => {
    const tree = renderer.create(<TabOption text="Tab value" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
