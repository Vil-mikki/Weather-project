import temperatureAT from '../actions/temperature/temperatureAT';

const {
    FETCH_TEMPERATURE_REQUEST,
    FETCH_TEMPERATURE_SUCCESS,
    FETCH_TEMPERATURE_FAILURE
} = temperatureAT;

const initialState = {
    isLoading: true, 
    isError: false,
    temperature: 0
};

const temperatureReducer = (
    state = initialState,
    { type, isLoading, isError, temperature, error }
) => {
    console.log(temperature)
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
                temperature
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