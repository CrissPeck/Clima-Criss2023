
import React from 'react';
import Weather from './Weather'; //objeto del testeo
import { render } from "@testing-library/react";
import '@testing-library/jest-dom';

test ("Weather render", async () => {
    //AAA Arrange Act Assert
    const { findByRole } = render(<Weather temperature={10} /> )

    const temp = await findByRole("heading")

      expect(temp).toHaveTextContent("10")
})

