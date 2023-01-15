import React from "react"
import { render } from "@testing-library/react"
import Cityinfo from "./Cityinfo" //(Objeto del testeo)


test ("CityInfo render", async () => {
    // AAA
    //Arange
    //Act
    const city = "Rivas"
    const country = "Nicaragua"

    //Render: renderiza el componente y retorna una serie de funciones 
    //en este caso utilizamos "findAllByRole"
    const { findAllByRole } = render(<Cityinfo city={city} country={country} />)
 
 
    //Assert
    //findAllByRole nos va a buscar en este caso todos los componentes que sean "heading" h1, h2, h3... el resultado es una raiz de componentes  
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const cityAndCountryComponents = await findAllByRole ("heading")

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

    //Si estas condiciones se cumplen (expect), el test esta "ok"

})