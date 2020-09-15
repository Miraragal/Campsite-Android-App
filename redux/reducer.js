import * as constant from './constant';

export const campsitesReducer = (state = { isLoading: true,
                                     errMess: null,
                                     campsites: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};

        case ActionTypes.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []}

        case ActionTypes.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};


export const commentsReducer = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};

export const partnersReducer = (state = { isLoading: true,
    errMess: null,
    partners: []}, action) => {
switch (action.type) {
case ActionTypes.ADD_PARTNERS:
return {...state, isLoading: false, errMess: null, partners: action.payload};

case ActionTypes.PARTNERS_LOADING:
return {...state, isLoading: true, errMess: null, partners: []}

case ActionTypes.PARTNERS_FAILED:
return {...state, isLoading: false, errMess: action.payload};

default:
return state;
}
};

export const promotionsReducer = (state = { isLoading: true,
    errMess: null,
    promotions: []}, action) => {
switch (action.type) {
case ActionTypes.ADD_PROMOTIONS:
return {...state, isLoading: false, errMess: null, promotions: action.payload};

case ActionTypes.PROMOTIONS_LOADING:
return {...state, isLoading: true, errMess: null, promotions: []}

case ActionTypes.PROMOTIONS_FAILED:
return {...state, isLoading: false, errMess: action.payload};

default:
return state;
}
};

