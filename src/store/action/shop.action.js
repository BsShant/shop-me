import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_SUCCESS } from './actionTypes';
import {  firestore, collectionSnapshotToMap  } from '../../firebase/firebase.utils';
export const fetchCollectionsStart = () =>({
    type: FETCH_COLLECTIONS_START,
})


export const fetchCollectionsSuccess = collectionsMap =>({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFailure = errorMessage =>({
    type: FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () =>{
    return dispatch =>{
        const collectionRef = firestore.collection("collections")
        dispatch(fetchCollectionsStart())
        try{
            collectionRef.onSnapshot(async snapshot =>{
                const collectionsMap = collectionSnapshotToMap(snapshot)
                dispatch(fetchCollectionsSuccess(collectionsMap))
               
            })
        }catch(error){
            dispatch(fetchCollectionsFailure(error.message))
        }
    }
}