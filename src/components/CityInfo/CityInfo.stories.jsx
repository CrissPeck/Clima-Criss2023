import React from 'react'
import 'typeface-roboto'
import CityInfo from './Cityinfo'

export default {
    tittle: "CityInfo",
    component: CityInfo,
}

export const CityExample = () => (<CityInfo city={"Rivas"} country={"Nicaragua"}></CityInfo>)