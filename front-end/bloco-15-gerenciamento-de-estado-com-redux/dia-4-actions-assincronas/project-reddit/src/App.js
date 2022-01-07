import React, { Component } from 'react'
import { connect } from 'react-redux';
import List from './Components/List';
import { fetchAPI } from './redux/action';

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchValue: 'Select',
      disable: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange({target}) {
    this.setState({
      searchValue: target.value,
      disable: true
    })
    const { requisitApi } = this.props
    if (target.value !== 'Select') requisitApi(target.value)
  }

  handleClick() {
    const { searchValue } = this.state;
    const { requisitApi } = this.props
    if (searchValue !== 'Select') requisitApi(searchValue)
  }
  render() {
    const { loading, error, data} = this.props;
    const { searchValue, disable } = this.state
    return (
      <div>
        {searchValue !== 'Select' ? <h1>Select: {searchValue}</h1> : <h1>Select category </h1>}
        <select onChange={this.handleChange}>
          <option disabled={disable}>Select</option>
          <option name='reactjs' >reactjs</option>
          <option name='frontend' >frontend</option>
        </select>
        <button type='submit' onClick={this.handleClick} >Refresh</button>
        {data.data && !loading ? <h2>Last Update: {Date().toLocaleString()}</h2> : null}
        {loading && <h1>Loading</h1>}
        {data.data && !loading ? data.data.children
          .map((child, index) => <List
            key={index+1}
            item={child.data.title}
            />) : null}
        {error && <h1>{error}</h1>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.fetchReducer.data,
  error: state.fetchReducer.error,
  loading: state.fetchReducer.loading
})

const mapDispatchToProps = (dispatch) => ({
  requisitApi: (payload) => dispatch(fetchAPI(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
