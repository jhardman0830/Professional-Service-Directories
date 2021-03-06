import React, { Component } from 'react'
import PropTypes from 'prop-types'
// router
import { Link } from 'react-router-dom'
// styles
import styled from 'styled-components'
import { colors, fontSize, displayFlex } from 'src/constants'
// child components
import SearchDropdown from 'src/components/common/SearchDropdown'
import SearchIcon from 'react-icons/lib/md/search'

const StyledPageSearch = styled.div`
  padding: 20px;
`

const Header = styled.div`
  ${ fontSize(36) }
  text-align: center;
  color: ${colors.textDefault};
`

const Info = styled.div`
  ${ fontSize(14) }
  text-align: center;
  color: ${colors.textDefault};
`

const FilterWrapper = styled.div`
  ${displayFlex()}
  padding: 20px;
  justify-content: center;
`

const Filter = styled.div`
  position: relative;
  width: 80%;
`

const SearchButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  color: ${colors.white};
  background: ${colors.blue};
  ${fontSize(20)}
  border-radius: 3px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border: none;
  ${displayFlex()}
  justify-content: center;
  align-items: center;
`

class LandingPageSearch extends Component {
  static propTypes = {
    city:         PropTypes.string,
    update:       PropTypes.func,
    fetchCities:  PropTypes.func,
    allCities:    PropTypes.arrayOf(
                    PropTypes.object
                  )
  }

  render() {
    const { city, update, allCities } = this.props

    return (
      <StyledPageSearch>
        <Header>Find Your Dentist</Header>
        <Info>Search our curated list of highly reputable dentists near you</Info>
        <FilterWrapper>
          <Filter>
            <SearchDropdown
              placeholder='City Name'
              filterKey='city'
              value={city}
              onChange={update}
              options={allCities}
            />
            { city &&
              <Link to='/search'>
                <SearchButton>
                  <SearchIcon />
                </SearchButton>
              </Link>
            }
          </Filter>
        </FilterWrapper>
      </StyledPageSearch>
    )
  }
}

export default LandingPageSearch
