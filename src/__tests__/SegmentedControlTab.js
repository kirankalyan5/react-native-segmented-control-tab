/* @flow */
import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'
import SegmentedControlTab from '../SegmentedControlTab'

jest.mock('../TabOption', () => 'TabOption')

describe('<SegmentedControlTab />', () => {
  it('should render default SegmentedControlTab', () => {
    const tree = renderer.create(<SegmentedControlTab />)
    expect(tree).toMatchSnapshot()
  })
})
