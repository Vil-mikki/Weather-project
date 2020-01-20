import temperatureAT from '../actions/temperature/temperatureAT';

const {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS,
    FETCH_TEMPERATURE_FAILURE
} = temperatureAT;

const initialState = {
    isLoading: true, 
    isError: false,
    weatherData: {}
};

const temperatureReducer = (
    state = initialState,
    { type, isLoading, isError, weatherData, error }
) => {
    switch (type) {
        case FETCH_TEMPERATURE_REQUEST:
            return {
                ...state,
                isLoading,
                isError
            };
        case FETCH_TEMPERATURE_SUCCESS:
            return {
                ...state,
                isLoading,
                isError,
                weatherData
            };
        case FETCH_TEMPERATURE_FAILURE:
            return {
                ...state,
                isLoading,
                isError,
                error
            };
        default:
            return state;
    }
}

export default temperatureReducer;