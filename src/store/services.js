import axios from "axios"
const lizzvAPI = axios.create({
  baseURL: "https://lizz-12-16v1-23406-prod.herokuapp.com/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_category_list(action) {
  return lizzvAPI.get(`/api/v1/category/`)
}
function api_v1_category_create(action) {
  return lizzvAPI.post(`/api/v1/category/`, null, { data: action.data })
}
function api_v1_category_read(action) {
  return lizzvAPI.get(`/api/v1/category/${action.id}/`)
}
function api_v1_category_update(action) {
  return lizzvAPI.put(`/api/v1/category/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_category_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/category/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_category_delete(action) {
  return lizzvAPI.delete(`/api/v1/category/${action.id}/`)
}
function api_v1_course_list(action) {
  return lizzvAPI.get(`/api/v1/course/`)
}
function api_v1_course_create(action) {
  return lizzvAPI.post(`/api/v1/course/`, null, { data: action.data })
}
function api_v1_course_read(action) {
  return lizzvAPI.get(`/api/v1/course/${action.id}/`)
}
function api_v1_course_update(action) {
  return lizzvAPI.put(`/api/v1/course/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_course_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/course/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_course_delete(action) {
  return lizzvAPI.delete(`/api/v1/course/${action.id}/`)
}
function api_v1_customtext_list(action) {
  return lizzvAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return lizzvAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return lizzvAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_enrollment_list(action) {
  return lizzvAPI.get(`/api/v1/enrollment/`)
}
function api_v1_enrollment_create(action) {
  return lizzvAPI.post(`/api/v1/enrollment/`, null, { data: action.data })
}
function api_v1_enrollment_read(action) {
  return lizzvAPI.get(`/api/v1/enrollment/${action.id}/`)
}
function api_v1_enrollment_update(action) {
  return lizzvAPI.put(`/api/v1/enrollment/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_enrollment_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/enrollment/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_enrollment_delete(action) {
  return lizzvAPI.delete(`/api/v1/enrollment/${action.id}/`)
}
function api_v1_event_list(action) {
  return lizzvAPI.get(`/api/v1/event/`)
}
function api_v1_event_create(action) {
  return lizzvAPI.post(`/api/v1/event/`, null, { data: action.data })
}
function api_v1_event_read(action) {
  return lizzvAPI.get(`/api/v1/event/${action.id}/`)
}
function api_v1_event_update(action) {
  return lizzvAPI.put(`/api/v1/event/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_event_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/event/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_event_delete(action) {
  return lizzvAPI.delete(`/api/v1/event/${action.id}/`)
}
function api_v1_group_list(action) {
  return lizzvAPI.get(`/api/v1/group/`)
}
function api_v1_group_create(action) {
  return lizzvAPI.post(`/api/v1/group/`, null, { data: action.data })
}
function api_v1_group_read(action) {
  return lizzvAPI.get(`/api/v1/group/${action.id}/`)
}
function api_v1_group_update(action) {
  return lizzvAPI.put(`/api/v1/group/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_group_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/group/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_group_delete(action) {
  return lizzvAPI.delete(`/api/v1/group/${action.id}/`)
}
function api_v1_homepage_list(action) {
  return lizzvAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return lizzvAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return lizzvAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_lesson_list(action) {
  return lizzvAPI.get(`/api/v1/lesson/`)
}
function api_v1_lesson_create(action) {
  return lizzvAPI.post(`/api/v1/lesson/`, null, { data: action.data })
}
function api_v1_lesson_read(action) {
  return lizzvAPI.get(`/api/v1/lesson/${action.id}/`)
}
function api_v1_lesson_update(action) {
  return lizzvAPI.put(`/api/v1/lesson/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_lesson_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/lesson/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_lesson_delete(action) {
  return lizzvAPI.delete(`/api/v1/lesson/${action.id}/`)
}
function api_v1_login_create(action) {
  return lizzvAPI.post(`/api/v1/login/`)
}
function api_v1_module_list(action) {
  return lizzvAPI.get(`/api/v1/module/`)
}
function api_v1_module_create(action) {
  return lizzvAPI.post(`/api/v1/module/`, null, { data: action.data })
}
function api_v1_module_read(action) {
  return lizzvAPI.get(`/api/v1/module/${action.id}/`)
}
function api_v1_module_update(action) {
  return lizzvAPI.put(`/api/v1/module/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_module_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/module/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_module_delete(action) {
  return lizzvAPI.delete(`/api/v1/module/${action.id}/`)
}
function api_v1_paymentmethod_list(action) {
  return lizzvAPI.get(`/api/v1/paymentmethod/`)
}
function api_v1_paymentmethod_create(action) {
  return lizzvAPI.post(`/api/v1/paymentmethod/`, null, { data: action.data })
}
function api_v1_paymentmethod_read(action) {
  return lizzvAPI.get(`/api/v1/paymentmethod/${action.id}/`)
}
function api_v1_paymentmethod_update(action) {
  return lizzvAPI.put(`/api/v1/paymentmethod/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_paymentmethod_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/paymentmethod/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_paymentmethod_delete(action) {
  return lizzvAPI.delete(`/api/v1/paymentmethod/${action.id}/`)
}
function api_v1_recording_list(action) {
  return lizzvAPI.get(`/api/v1/recording/`)
}
function api_v1_recording_create(action) {
  return lizzvAPI.post(`/api/v1/recording/`, null, { data: action.data })
}
function api_v1_recording_read(action) {
  return lizzvAPI.get(`/api/v1/recording/${action.id}/`)
}
function api_v1_recording_update(action) {
  return lizzvAPI.put(`/api/v1/recording/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_recording_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/recording/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_recording_delete(action) {
  return lizzvAPI.delete(`/api/v1/recording/${action.id}/`)
}
function api_v1_signup_create(action) {
  return lizzvAPI.post(`/api/v1/signup/`, null, { data: action.data })
}
function api_v1_subscription_list(action) {
  return lizzvAPI.get(`/api/v1/subscription/`)
}
function api_v1_subscription_create(action) {
  return lizzvAPI.post(`/api/v1/subscription/`, null, { data: action.data })
}
function api_v1_subscription_read(action) {
  return lizzvAPI.get(`/api/v1/subscription/${action.id}/`)
}
function api_v1_subscription_update(action) {
  return lizzvAPI.put(`/api/v1/subscription/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_subscription_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/subscription/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_subscription_delete(action) {
  return lizzvAPI.delete(`/api/v1/subscription/${action.id}/`)
}
function api_v1_subscriptiontype_list(action) {
  return lizzvAPI.get(`/api/v1/subscriptiontype/`)
}
function api_v1_subscriptiontype_create(action) {
  return lizzvAPI.post(`/api/v1/subscriptiontype/`, null, { data: action.data })
}
function api_v1_subscriptiontype_read(action) {
  return lizzvAPI.get(`/api/v1/subscriptiontype/${action.id}/`)
}
function api_v1_subscriptiontype_update(action) {
  return lizzvAPI.put(`/api/v1/subscriptiontype/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_subscriptiontype_partial_update(action) {
  return lizzvAPI.patch(`/api/v1/subscriptiontype/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_subscriptiontype_delete(action) {
  return lizzvAPI.delete(`/api/v1/subscriptiontype/${action.id}/`)
}
function rest_auth_login_create(action) {
  return lizzvAPI.post(`/rest-auth/login/`, null, { data: action.data })
}
function rest_auth_logout_list(action) {
  return lizzvAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return lizzvAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return lizzvAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return lizzvAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return lizzvAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return lizzvAPI.post(`/rest-auth/registration/`, null, { data: action.data })
}
function rest_auth_registration_verify_email_create(action) {
  return lizzvAPI.post(`/rest-auth/registration/verify-email/`, null, {
    data: action.data
  })
}
function rest_auth_user_read(action) {
  return lizzvAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return lizzvAPI.put(`/rest-auth/user/`, null, { data: action.data })
}
function rest_auth_user_partial_update(action) {
  return lizzvAPI.patch(`/rest-auth/user/`, null, { data: action.data })
}
export const apiService = {
  api_v1_category_list,
  api_v1_category_create,
  api_v1_category_read,
  api_v1_category_update,
  api_v1_category_partial_update,
  api_v1_category_delete,
  api_v1_course_list,
  api_v1_course_create,
  api_v1_course_read,
  api_v1_course_update,
  api_v1_course_partial_update,
  api_v1_course_delete,
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_enrollment_list,
  api_v1_enrollment_create,
  api_v1_enrollment_read,
  api_v1_enrollment_update,
  api_v1_enrollment_partial_update,
  api_v1_enrollment_delete,
  api_v1_event_list,
  api_v1_event_create,
  api_v1_event_read,
  api_v1_event_update,
  api_v1_event_partial_update,
  api_v1_event_delete,
  api_v1_group_list,
  api_v1_group_create,
  api_v1_group_read,
  api_v1_group_update,
  api_v1_group_partial_update,
  api_v1_group_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_lesson_list,
  api_v1_lesson_create,
  api_v1_lesson_read,
  api_v1_lesson_update,
  api_v1_lesson_partial_update,
  api_v1_lesson_delete,
  api_v1_login_create,
  api_v1_module_list,
  api_v1_module_create,
  api_v1_module_read,
  api_v1_module_update,
  api_v1_module_partial_update,
  api_v1_module_delete,
  api_v1_paymentmethod_list,
  api_v1_paymentmethod_create,
  api_v1_paymentmethod_read,
  api_v1_paymentmethod_update,
  api_v1_paymentmethod_partial_update,
  api_v1_paymentmethod_delete,
  api_v1_recording_list,
  api_v1_recording_create,
  api_v1_recording_read,
  api_v1_recording_update,
  api_v1_recording_partial_update,
  api_v1_recording_delete,
  api_v1_signup_create,
  api_v1_subscription_list,
  api_v1_subscription_create,
  api_v1_subscription_read,
  api_v1_subscription_update,
  api_v1_subscription_partial_update,
  api_v1_subscription_delete,
  api_v1_subscriptiontype_list,
  api_v1_subscriptiontype_create,
  api_v1_subscriptiontype_read,
  api_v1_subscriptiontype_update,
  api_v1_subscriptiontype_partial_update,
  api_v1_subscriptiontype_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
