import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { displayFlex, colors, breakpoints } from 'src/constants.js'
// child components
import ResultCard from 'src/components/ResultCard'

const StyledResultsPane = styled.div`
  width: 100%;
  margin-top: 30px;
  float: left;
  background: ${ colors.lightGray };
  ${ displayFlex() }
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints._600}) {
    width: 75%;
	}
`

const FlexContainer = styled.ul`
  width: 100%;
  margin: 0;
  list-style: none;
  ${displayFlex()}
  flex-wrap: wrap;
  padding: 0;
  background: ${colors.gray};

  @media screen and (min-width: ${breakpoints._600}) {
    max-width: 950px;
  }
`

export default class ResultsPane extends Component {
  static propTypes = {
    results:  PropTypes.arrayOf(
                PropTypes.object
              )
  }

  averageReview = reviews => {
    const total = reviews.reduce( (prev, current) => {
      return prev + current.rating
    }, 0)

    return reviews.length ? total/reviews.length : null
  }

  render() {
    const { results } = this.props

    return(
      <StyledResultsPane>
        <FlexContainer>
            { results && results.map( ({
              name,
              phone,
              website,
              reviews,
              city,
              state
            }, i) => (
              <ResultCard
                key={i}
                name={name}
                rating={this.averageReview(reviews)}
                address={`${city.name}, ${state.name}`}
                website={website}
                phone={phone}
              />
            ))}
        </FlexContainer>
      </StyledResultsPane>
    )
  }
}
