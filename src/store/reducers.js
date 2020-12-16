import * as types from "./constants"

const initialState = { lizzvAPI: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.API_V1_CATEGORY_LIST:
    case types.API_V1_CATEGORY_LIST_SUCCEEDED:
    case types.API_V1_CATEGORY_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_CATEGORY_CREATE:
    case types.API_V1_CATEGORY_CREATE_SUCCEEDED:
    case types.API_V1_CATEGORY_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_CATEGORY_READ:
    case types.API_V1_CATEGORY_READ_SUCCEEDED:
    case types.API_V1_CATEGORY_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_CATEGORY_UPDATE:
    case types.API_V1_CATEGORY_UPDATE_SUCCEEDED:
    case types.API_V1_CATEGORY_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_CATEGORY_PARTIAL_UPDATE:
    case types.API_V1_CATEGORY_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CATEGORY_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_CATEGORY_DELETE:
    case types.API_V1_CATEGORY_DELETE_SUCCEEDED:
    case types.API_V1_CATEGORY_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_COURSE_LIST:
    case types.API_V1_COURSE_LIST_SUCCEEDED:
    case types.API_V1_COURSE_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_COURSE_CREATE:
    case types.API_V1_COURSE_CREATE_SUCCEEDED:
    case types.API_V1_COURSE_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_COURSE_READ:
    case types.API_V1_COURSE_READ_SUCCEEDED:
    case types.API_V1_COURSE_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_COURSE_UPDATE:
    case types.API_V1_COURSE_UPDATE_SUCCEEDED:
    case types.API_V1_COURSE_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_COURSE_PARTIAL_UPDATE:
    case types.API_V1_COURSE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_COURSE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_COURSE_DELETE:
    case types.API_V1_COURSE_DELETE_SUCCEEDED:
    case types.API_V1_COURSE_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_LIST:
    case types.API_V1_ENROLLMENT_LIST_SUCCEEDED:
    case types.API_V1_ENROLLMENT_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_CREATE:
    case types.API_V1_ENROLLMENT_CREATE_SUCCEEDED:
    case types.API_V1_ENROLLMENT_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_READ:
    case types.API_V1_ENROLLMENT_READ_SUCCEEDED:
    case types.API_V1_ENROLLMENT_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_UPDATE:
    case types.API_V1_ENROLLMENT_UPDATE_SUCCEEDED:
    case types.API_V1_ENROLLMENT_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_PARTIAL_UPDATE:
    case types.API_V1_ENROLLMENT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_ENROLLMENT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_ENROLLMENT_DELETE:
    case types.API_V1_ENROLLMENT_DELETE_SUCCEEDED:
    case types.API_V1_ENROLLMENT_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_EVENT_LIST:
    case types.API_V1_EVENT_LIST_SUCCEEDED:
    case types.API_V1_EVENT_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_EVENT_CREATE:
    case types.API_V1_EVENT_CREATE_SUCCEEDED:
    case types.API_V1_EVENT_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_EVENT_READ:
    case types.API_V1_EVENT_READ_SUCCEEDED:
    case types.API_V1_EVENT_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_EVENT_UPDATE:
    case types.API_V1_EVENT_UPDATE_SUCCEEDED:
    case types.API_V1_EVENT_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_EVENT_PARTIAL_UPDATE:
    case types.API_V1_EVENT_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_EVENT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_EVENT_DELETE:
    case types.API_V1_EVENT_DELETE_SUCCEEDED:
    case types.API_V1_EVENT_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_GROUP_LIST:
    case types.API_V1_GROUP_LIST_SUCCEEDED:
    case types.API_V1_GROUP_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_GROUP_CREATE:
    case types.API_V1_GROUP_CREATE_SUCCEEDED:
    case types.API_V1_GROUP_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_GROUP_READ:
    case types.API_V1_GROUP_READ_SUCCEEDED:
    case types.API_V1_GROUP_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_GROUP_UPDATE:
    case types.API_V1_GROUP_UPDATE_SUCCEEDED:
    case types.API_V1_GROUP_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_GROUP_PARTIAL_UPDATE:
    case types.API_V1_GROUP_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_GROUP_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_GROUP_DELETE:
    case types.API_V1_GROUP_DELETE_SUCCEEDED:
    case types.API_V1_GROUP_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_LESSON_LIST:
    case types.API_V1_LESSON_LIST_SUCCEEDED:
    case types.API_V1_LESSON_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_LESSON_CREATE:
    case types.API_V1_LESSON_CREATE_SUCCEEDED:
    case types.API_V1_LESSON_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_LESSON_READ:
    case types.API_V1_LESSON_READ_SUCCEEDED:
    case types.API_V1_LESSON_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_LESSON_UPDATE:
    case types.API_V1_LESSON_UPDATE_SUCCEEDED:
    case types.API_V1_LESSON_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_LESSON_PARTIAL_UPDATE:
    case types.API_V1_LESSON_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_LESSON_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_LESSON_DELETE:
    case types.API_V1_LESSON_DELETE_SUCCEEDED:
    case types.API_V1_LESSON_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_MODULE_LIST:
    case types.API_V1_MODULE_LIST_SUCCEEDED:
    case types.API_V1_MODULE_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_MODULE_CREATE:
    case types.API_V1_MODULE_CREATE_SUCCEEDED:
    case types.API_V1_MODULE_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_MODULE_READ:
    case types.API_V1_MODULE_READ_SUCCEEDED:
    case types.API_V1_MODULE_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_MODULE_UPDATE:
    case types.API_V1_MODULE_UPDATE_SUCCEEDED:
    case types.API_V1_MODULE_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_MODULE_PARTIAL_UPDATE:
    case types.API_V1_MODULE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_MODULE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_MODULE_DELETE:
    case types.API_V1_MODULE_DELETE_SUCCEEDED:
    case types.API_V1_MODULE_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_LIST:
    case types.API_V1_PAYMENTMETHOD_LIST_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_CREATE:
    case types.API_V1_PAYMENTMETHOD_CREATE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_READ:
    case types.API_V1_PAYMENTMETHOD_READ_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_UPDATE:
    case types.API_V1_PAYMENTMETHOD_UPDATE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE:
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_PAYMENTMETHOD_DELETE:
    case types.API_V1_PAYMENTMETHOD_DELETE_SUCCEEDED:
    case types.API_V1_PAYMENTMETHOD_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_RECORDING_LIST:
    case types.API_V1_RECORDING_LIST_SUCCEEDED:
    case types.API_V1_RECORDING_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_RECORDING_CREATE:
    case types.API_V1_RECORDING_CREATE_SUCCEEDED:
    case types.API_V1_RECORDING_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_RECORDING_READ:
    case types.API_V1_RECORDING_READ_SUCCEEDED:
    case types.API_V1_RECORDING_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_RECORDING_UPDATE:
    case types.API_V1_RECORDING_UPDATE_SUCCEEDED:
    case types.API_V1_RECORDING_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_RECORDING_PARTIAL_UPDATE:
    case types.API_V1_RECORDING_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_RECORDING_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_RECORDING_DELETE:
    case types.API_V1_RECORDING_DELETE_SUCCEEDED:
    case types.API_V1_RECORDING_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_LIST:
    case types.API_V1_SUBSCRIPTION_LIST_SUCCEEDED:
    case types.API_V1_SUBSCRIPTION_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_CREATE:
    case types.API_V1_SUBSCRIPTION_CREATE_SUCCEEDED:
    case types.API_V1_SUBSCRIPTION_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_READ:
    case types.API_V1_SUBSCRIPTION_READ_SUCCEEDED:
    case types.API_V1_SUBSCRIPTION_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_UPDATE:
    case types.API_V1_SUBSCRIPTION_UPDATE_SUCCEEDED:
    case types.API_V1_SUBSCRIPTION_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_PARTIAL_UPDATE:
    case types.API_V1_SUBSCRIPTION_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_SUBSCRIPTION_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTION_DELETE:
    case types.API_V1_SUBSCRIPTION_DELETE_SUCCEEDED:
    case types.API_V1_SUBSCRIPTION_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_LIST:
    case types.API_V1_SUBSCRIPTIONTYPE_LIST_SUCCEEDED:
    case types.API_V1_SUBSCRIPTIONTYPE_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_CREATE:
    case types.API_V1_SUBSCRIPTIONTYPE_CREATE_SUCCEEDED:
    case types.API_V1_SUBSCRIPTIONTYPE_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_READ:
    case types.API_V1_SUBSCRIPTIONTYPE_READ_SUCCEEDED:
    case types.API_V1_SUBSCRIPTIONTYPE_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_UPDATE:
    case types.API_V1_SUBSCRIPTIONTYPE_UPDATE_SUCCEEDED:
    case types.API_V1_SUBSCRIPTIONTYPE_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_PARTIAL_UPDATE:
    case types.API_V1_SUBSCRIPTIONTYPE_PARTIAL_UPDATE_SUCCEEDED:
    case types.API_V1_SUBSCRIPTIONTYPE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.API_V1_SUBSCRIPTIONTYPE_DELETE:
    case types.API_V1_SUBSCRIPTIONTYPE_DELETE_SUCCEEDED:
    case types.API_V1_SUBSCRIPTIONTYPE_DELETE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        lizzvAPI: [...state.lizzvAPI, action.response]
      })
    default:
      return state
  }
}
