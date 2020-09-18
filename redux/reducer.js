import * as constant from './constant';

export const campsitesReducer = (state = { isLoading: true,
                                     errMess: null,
                                     campsites: []}, action) => {
    switch (action.type) {
        case constant.ADD_CAMPSITES:
            return {...state, isLoading: false, errMess: null, campsites: action.payload};

        case constant.CAMPSITES_LOADING:
            return {...state, isLoading: true, errMess: null, campsites: []}

        case constant.CAMPSITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
      }
};


export const commentsReducer = (state = { errMess: null, comments: []}, action) => {
    switch (action.type) {
        case constant.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};

        case constant.COMMENTS_FAILED:
            return {...state, errMess: action.payload};

        default:
            return state;
    }
};


export const partnersReducer = (state = { isLoading: true,
    errMess: null,
    partners: []}, action) => {
switch (action.type) {
case constant.ADD_PARTNERS:
return {...state, isLoading: false, errMess: null, partners: action.payload};

case constant.PARTNERS_LOADING:
return {...state, isLoading: true, errMess: null, partners: []}

case constant.PARTNERS_FAILED:
return {...state, isLoading: false, errMess: action.payload};

default:
return state;
}
};

export const promotionsReducer = (state = { isLoading: true,
    errMess: null,
    promotions: []}, action) => {
switch (action.type) {
case constant.ADD_PROMOTIONS:
return {...state, isLoading: false, errMess: null, promotions: action.payload};

case constant.PROMOTIONS_LOADING:
return {...state, isLoading: true, errMess: null, promotions: []}

case constant.PROMOTIONS_FAILED:
return {...state, isLoading: false, errMess: action.payload};

default:
return state;
}
};

