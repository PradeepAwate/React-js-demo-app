import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';
export function loadCoursesSuccess(course) {
    //debugger;
    return {type: types.LOAD_COURSES_SUCCESS, course};
}

//Action creators createCourseSuccess n updateCourseSuccess
export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course};
}

export function loadCourses() {
    return function(dispatch) {
        return courseApi.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    };
}

//Thunk 
export function saveCourse(course) {
    return function (dispatch, getState) {
        return courseApi.saveCourse(course).then(course => {
            course.id ? dispatch(updateCourseSuccess(course)):
                        dispatch(createCourseSuccess(course));
        }).catch(error => {
            throw(error);
        });
    };
}