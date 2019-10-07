import React from 'react'
import styled from 'styled-components'
import Heading from './Heading'
import Subheading from './Subheading'
import { name, tagline, description } from '../data.json'

const Avatar = styled.img`
  border-radius: 50%;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.125);
  height: 12rem;
  width: 12rem;
`

export default () => (
    <>
        <Avatar src="../../static/face-transparent.png" />
        <Heading children={name} />
        <Subheading>
            {description}
        </Subheading>
        <Subheading>{tagline}</Subheading>
    </>
)