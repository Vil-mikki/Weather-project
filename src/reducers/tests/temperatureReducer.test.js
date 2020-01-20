import weatherReducer from '../temperatureReducer';

describe('weather reducer', () => {
    let initialState;

    beforeEach(() => {
        initialState = {
            isLoading: true, 
            isError: false,
            weatherData: {}
        };
    });

    it('should return the initial state', () => {
      expect(weatherReducer(initialState, {})).toEqual(initialState)
    });

    it("inappropriate action type should return the initial state", () => {
        const action = {
          type: "INVALID_ACTION_TYPE",
          weatherData: "test123"
        };
    
        expect(weatherReducer(initialState, action)).toEqual(initialState);
    });

    it('should handle change of state properly', () => {
        const errorAction = {
            type: 'FETCH_TEMPERATURE_FAILURE',
            isLoading: false,
            isError: true,
            error: 'Test error'
        };

        expect(weatherReducer(initialState, errorAction)).toEqual({
            ...initialState,
            isLoading: false,
            isError: true,
            error: 'Test error'
        });

        const successAction = {
            type: 'FETCH_TEMPERATURE_SUCCESS',
            isLoading: false,
            isError: false,
            weatherData: {
                'name': 'test',
                'temp': 22
            }
        };

        expect(weatherReducer(initialState, successAction)).toEqual({
            isLoading: false,
            isError: false,
            weatherData: {
                name: 'test',
                temp: 22
            }
        });
    });
})