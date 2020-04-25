const React = require('react')
const { Cards, Chart, CountryPicker } = require('./components')
const styles = require('./App.module.css')
const { fetchData } = require('./api')
class App extends React.Component {

  state = {
    data: {}
  }

  async componentDidMount() {
    const fetchedData = await fetchData()
    this.setState({ data: fetchedData })
  }

  render() {

    const { data } = this.state
    return (
      <div className={styles.container}>
        <Cards data={ data }/>
        <CountryPicker />
        <Chart />
      </div>
    )
  }
}

module.exports = { App }