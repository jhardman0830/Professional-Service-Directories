import React from 'react'
import PropTypes from 'prop-types'
// import styled from 'styled-components'
// import FilterIcon from 'react-icons/lib/md/filter-list'
// import { colors, fontSize, displayFlex } from 'src/constants'
// import SearchDropdown from 'src/components/common/SearchDropdown'

const Filters = (
//   {
//    data: {
//      allCities=[],
//      allInsurances=[],
//      allVisitReasons=[]
//   },
//   cityValue,
//   insuranceValue,
//   visitReasonValue,
//   update
// }
) => (
  <div>
    <h1>Desktop Filters!</h1>
  </div>

)

Filters.propTypes = {
  data:             PropTypes.shape({
                      allCities:        PropTypes.arrayOf(
                                          PropTypes.object
                                        ),
                      allInsurances:    PropTypes.arrayOf(
                                          PropTypes.object
                                        ),
                      allVisitReasons:  PropTypes.arrayOf(
                                          PropTypes.object
                                        ),
                    }).required,
  cityValue:        PropTypes.string,
  insuranceValue:   PropTypes.string,
  visitReasonValue: PropTypes.string,
  update:           PropTypes.func
}

export default Filters