import *
 as constant from './constant';
import { baseUrl } from '../shared/baseUrl';

export const fetchComments = () => async (dispatch)  => {
    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = errMess => ({
    type: constant.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = (comments) => ({
    type: constant.ADD_COMMENTS,
    payload: comments
});

export const fetchCampsites = () => async (dispatch)  => {

    dispatch(campsitesLoading());

    return fetch(baseUrl + 'campsites')
        .then(response => {
                if (response.ok) {
                return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)));
};

export const campsitesLoading = () => ({
    type: constant.CAMPSITES_LOADING
});

export const campsitesFailed = errMess => ({
    type: constant.CAMPSITES_FAILED,
    payload: errMess
});

export const addCampsites = campsites => ({
    type: constant.ADD_CAMPSITES,
    payload: campsites
});

export const fetchPromotions = () => async (dispatch)  => {
    
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: constant.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: constant.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: constant.ADD_PROMOTIONS,
    payload: promotions
});

export const fetchPartners = () => async (dispatch) => {
    
    dispatch(partnersLoading());

    return fetch(baseUrl + 'partners')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            })
        .then(response => response.json())
        .then(partners => dispatch(addPartners(partners)))
        .catch(error => dispatch(partnersFailed(error.message)));
};

export const partnersLoading = () => ({
    type: constant.PARTNERS_LOADING
});

export const partnersFailed = errMess => ({
    type: constant.PARTNERS_FAILED,
    payload: errMess
});

export const addPartners = partners => ({
    type: constant.ADD_PARTNERS,
    payload: partners
});