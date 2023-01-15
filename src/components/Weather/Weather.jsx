import React from 'react'
import PropTypes from 'prop-types'
import Typography  from '@mui/material'
import { WiCloud } from 'react-icons/wi'
import { IconContext } from 'react-icons'

const Weather = ({temperature}) => {
  return (
    <div>
        <IconContext.Provider value={{ size:" 2em "}} >
           <WiCloud></WiCloud>
        </IconContext.Provider>
        <Typography display="inline" variant='h2'>{temperature} </Typography>
      
    </div>
  )
}

Weather.propTypes = {
  temperature: PropTypes.number

}

export default Weather
