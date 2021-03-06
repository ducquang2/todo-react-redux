import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Filter from '../components/Filter'

const mapStateToProps = (state, ownProps) => ({
})

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (filter) => dispatch(setVisibilityFilter(filter))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
