import { convertKelvinToCelsius } from '../convertKelvinToCelsius';

describe('convertKelvinToCelsius testing', () => {
    it('properly converts Kelvin to Celsius', () => {
        const kelvinTemp = 296.15;
        const celsiusTemp = 23;
        expect(
            convertKelvinToCelsius(kelvinTemp)
        ).toEqual(celsiusTemp);
    });

    it('properly converts Kelvin to Celsius', () => {
        const kelvinTemp = 246.35;
        const celsiusTemp = -27;
        expect(
            convertKelvinToCelsius(kelvinTemp)
        ).toEqual(celsiusTemp);
    });
})