const React = require('react')
const { Cards, Chart, CountryPicker } = require('./components')
const styles = require('./App.module.css')
class App extends React.Component{
    render() {
        return(
            <div className={styles.container}>
                <Cards />
                <CountryPicker />
                <Chart />
            </div>
        )
    }
}

module.exports = {App}