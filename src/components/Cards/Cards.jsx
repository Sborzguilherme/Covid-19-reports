const React = require('react')
const { Card, CardContent, Typography, Grid} = require('@material-ui/core')
const styles = require('./Cards.module.css')
const Cards = () => {
  return (
   <div className={styles.container}>
     <Grid container spacing={3} justify='center'>
        <Grid item component={ Card }>
          <CardContent>
            <Typography color ='textSecondary' gutterBottom> Infected </Typography>
            <Typography variant="h5">REAL DATA</Typography>
            <Typography color='textSecondary'>REAL DAY</Typography>
            <Typography variant="body2" >Number of active cases of COVID-19</Typography>  
          </CardContent>  
        </Grid>    
     </Grid>

   </div>
  )
}

module.exports = { Cards }