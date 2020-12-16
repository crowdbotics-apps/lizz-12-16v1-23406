import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* api_v1_category_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_list, action)
    yield put(actions.api_v1_category_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_listFailed(err, action))
  }
}
function* api_v1_category_listWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_LIST, api_v1_category_listWorker)
}
function* api_v1_category_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_create, action)
    yield put(actions.api_v1_category_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_createFailed(err, action))
  }
}
function* api_v1_category_createWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_CREATE, api_v1_category_createWorker)
}
function* api_v1_category_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_read, action)
    yield put(actions.api_v1_category_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_readFailed(err, action))
  }
}
function* api_v1_category_readWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_READ, api_v1_category_readWorker)
}
function* api_v1_category_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_update, action)
    yield put(actions.api_v1_category_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_updateFailed(err, action))
  }
}
function* api_v1_category_updateWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_UPDATE, api_v1_category_updateWorker)
}
function* api_v1_category_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_partial_update, action)
    yield put(actions.api_v1_category_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_partial_updateFailed(err, action))
  }
}
function* api_v1_category_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CATEGORY_PARTIAL_UPDATE,
    api_v1_category_partial_updateWorker
  )
}
function* api_v1_category_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_category_delete, action)
    yield put(actions.api_v1_category_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_category_deleteFailed(err, action))
  }
}
function* api_v1_category_deleteWatcher() {
  yield takeEvery(types.API_V1_CATEGORY_DELETE, api_v1_category_deleteWorker)
}
function* api_v1_course_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_course_list, action)
    yield put(actions.api_v1_course_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_course_listFailed(err, action))
  }
}
function* api_v1_course_listWatcher() {
  yield takeEvery(types.API_V1_COURSE_LIST, api_v1_course_listWorker)
}
function* api_v1_course_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_course_create, action)
    yield put(actions.api_v1_course_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_course_createFailed(err, action))
  }
}
function* api_v1_course_createWatcher() {
  yield takeEvery(types.API_V1_COURSE_CREATE, api_v1_course_createWorker)
}
function* api_v1_course_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_course_read, action)
    yield put(actions.api_v1_course_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_course_readFailed(err, action))
  }
}
function* api_v1_course_readWatcher() {
  yield takeEvery(types.API_V1_COURSE_READ, api_v1_course_readWorker)
}
function* api_v1_course_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_course_update, action)
    yield put(actions.api_v1_course_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_course_updateFailed(err, action))
  }
}
function* api_v1_course_updateWatcher() {
  yield takeEvery(types.API_V1_COURSE_UPDATE, api_v1_course_updateWorker)
}
function* api_v1_course_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_course_partial_update, action)
    yield put(actions.api_v1_course_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_course_partial_updateFailed(err, action))
  }
}
function* api_v1_course_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_COURSE_PARTIAL_UPDATE,
    api_v1_course_partial_updateWorker
  )
}
function* api_v1_course_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_course_delete, action)
    yield put(actions.api_v1_course_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_course_deleteFailed(err, action))
  }
}
function* api_v1_course_deleteWatcher() {
  yield takeEvery(types.API_V1_COURSE_DELETE, api_v1_course_deleteWorker)
}
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err, action))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err, action))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err, action))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err, action))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_enrollment_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_enrollment_list, action)
    yield put(actions.api_v1_enrollment_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_enrollment_listFailed(err, action))
  }
}
function* api_v1_enrollment_listWatcher() {
  yield takeEvery(types.API_V1_ENROLLMENT_LIST, api_v1_enrollment_listWorker)
}
function* api_v1_enrollment_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_enrollment_create, action)
    yield put(actions.api_v1_enrollment_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_enrollment_createFailed(err, action))
  }
}
function* api_v1_enrollment_createWatcher() {
  yield takeEvery(
    types.API_V1_ENROLLMENT_CREATE,
    api_v1_enrollment_createWorker
  )
}
function* api_v1_enrollment_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_enrollment_read, action)
    yield put(actions.api_v1_enrollment_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_enrollment_readFailed(err, action))
  }
}
function* api_v1_enrollment_readWatcher() {
  yield takeEvery(types.API_V1_ENROLLMENT_READ, api_v1_enrollment_readWorker)
}
function* api_v1_enrollment_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_enrollment_update, action)
    yield put(actions.api_v1_enrollment_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_enrollment_updateFailed(err, action))
  }
}
function* api_v1_enrollment_updateWatcher() {
  yield takeEvery(
    types.API_V1_ENROLLMENT_UPDATE,
    api_v1_enrollment_updateWorker
  )
}
function* api_v1_enrollment_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_enrollment_partial_update,
      action
    )
    yield put(actions.api_v1_enrollment_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_enrollment_partial_updateFailed(err, action))
  }
}
function* api_v1_enrollment_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_ENROLLMENT_PARTIAL_UPDATE,
    api_v1_enrollment_partial_updateWorker
  )
}
function* api_v1_enrollment_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_enrollment_delete, action)
    yield put(actions.api_v1_enrollment_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_enrollment_deleteFailed(err, action))
  }
}
function* api_v1_enrollment_deleteWatcher() {
  yield takeEvery(
    types.API_V1_ENROLLMENT_DELETE,
    api_v1_enrollment_deleteWorker
  )
}
function* api_v1_event_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_event_list, action)
    yield put(actions.api_v1_event_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_event_listFailed(err, action))
  }
}
function* api_v1_event_listWatcher() {
  yield takeEvery(types.API_V1_EVENT_LIST, api_v1_event_listWorker)
}
function* api_v1_event_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_event_create, action)
    yield put(actions.api_v1_event_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_event_createFailed(err, action))
  }
}
function* api_v1_event_createWatcher() {
  yield takeEvery(types.API_V1_EVENT_CREATE, api_v1_event_createWorker)
}
function* api_v1_event_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_event_read, action)
    yield put(actions.api_v1_event_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_event_readFailed(err, action))
  }
}
function* api_v1_event_readWatcher() {
  yield takeEvery(types.API_V1_EVENT_READ, api_v1_event_readWorker)
}
function* api_v1_event_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_event_update, action)
    yield put(actions.api_v1_event_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_event_updateFailed(err, action))
  }
}
function* api_v1_event_updateWatcher() {
  yield takeEvery(types.API_V1_EVENT_UPDATE, api_v1_event_updateWorker)
}
function* api_v1_event_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_event_partial_update, action)
    yield put(actions.api_v1_event_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_event_partial_updateFailed(err, action))
  }
}
function* api_v1_event_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_EVENT_PARTIAL_UPDATE,
    api_v1_event_partial_updateWorker
  )
}
function* api_v1_event_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_event_delete, action)
    yield put(actions.api_v1_event_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_event_deleteFailed(err, action))
  }
}
function* api_v1_event_deleteWatcher() {
  yield takeEvery(types.API_V1_EVENT_DELETE, api_v1_event_deleteWorker)
}
function* api_v1_group_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_group_list, action)
    yield put(actions.api_v1_group_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_group_listFailed(err, action))
  }
}
function* api_v1_group_listWatcher() {
  yield takeEvery(types.API_V1_GROUP_LIST, api_v1_group_listWorker)
}
function* api_v1_group_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_group_create, action)
    yield put(actions.api_v1_group_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_group_createFailed(err, action))
  }
}
function* api_v1_group_createWatcher() {
  yield takeEvery(types.API_V1_GROUP_CREATE, api_v1_group_createWorker)
}
function* api_v1_group_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_group_read, action)
    yield put(actions.api_v1_group_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_group_readFailed(err, action))
  }
}
function* api_v1_group_readWatcher() {
  yield takeEvery(types.API_V1_GROUP_READ, api_v1_group_readWorker)
}
function* api_v1_group_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_group_update, action)
    yield put(actions.api_v1_group_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_group_updateFailed(err, action))
  }
}
function* api_v1_group_updateWatcher() {
  yield takeEvery(types.API_V1_GROUP_UPDATE, api_v1_group_updateWorker)
}
function* api_v1_group_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_group_partial_update, action)
    yield put(actions.api_v1_group_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_group_partial_updateFailed(err, action))
  }
}
function* api_v1_group_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_GROUP_PARTIAL_UPDATE,
    api_v1_group_partial_updateWorker
  )
}
function* api_v1_group_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_group_delete, action)
    yield put(actions.api_v1_group_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_group_deleteFailed(err, action))
  }
}
function* api_v1_group_deleteWatcher() {
  yield takeEvery(types.API_V1_GROUP_DELETE, api_v1_group_deleteWorker)
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err, action))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err, action))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err, action))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err, action))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_lesson_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_lesson_list, action)
    yield put(actions.api_v1_lesson_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_lesson_listFailed(err, action))
  }
}
function* api_v1_lesson_listWatcher() {
  yield takeEvery(types.API_V1_LESSON_LIST, api_v1_lesson_listWorker)
}
function* api_v1_lesson_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_lesson_create, action)
    yield put(actions.api_v1_lesson_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_lesson_createFailed(err, action))
  }
}
function* api_v1_lesson_createWatcher() {
  yield takeEvery(types.API_V1_LESSON_CREATE, api_v1_lesson_createWorker)
}
function* api_v1_lesson_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_lesson_read, action)
    yield put(actions.api_v1_lesson_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_lesson_readFailed(err, action))
  }
}
function* api_v1_lesson_readWatcher() {
  yield takeEvery(types.API_V1_LESSON_READ, api_v1_lesson_readWorker)
}
function* api_v1_lesson_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_lesson_update, action)
    yield put(actions.api_v1_lesson_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_lesson_updateFailed(err, action))
  }
}
function* api_v1_lesson_updateWatcher() {
  yield takeEvery(types.API_V1_LESSON_UPDATE, api_v1_lesson_updateWorker)
}
function* api_v1_lesson_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_lesson_partial_update, action)
    yield put(actions.api_v1_lesson_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_lesson_partial_updateFailed(err, action))
  }
}
function* api_v1_lesson_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_LESSON_PARTIAL_UPDATE,
    api_v1_lesson_partial_updateWorker
  )
}
function* api_v1_lesson_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_lesson_delete, action)
    yield put(actions.api_v1_lesson_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_lesson_deleteFailed(err, action))
  }
}
function* api_v1_lesson_deleteWatcher() {
  yield takeEvery(types.API_V1_LESSON_DELETE, api_v1_lesson_deleteWorker)
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err, action))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_module_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_module_list, action)
    yield put(actions.api_v1_module_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_module_listFailed(err, action))
  }
}
function* api_v1_module_listWatcher() {
  yield takeEvery(types.API_V1_MODULE_LIST, api_v1_module_listWorker)
}
function* api_v1_module_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_module_create, action)
    yield put(actions.api_v1_module_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_module_createFailed(err, action))
  }
}
function* api_v1_module_createWatcher() {
  yield takeEvery(types.API_V1_MODULE_CREATE, api_v1_module_createWorker)
}
function* api_v1_module_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_module_read, action)
    yield put(actions.api_v1_module_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_module_readFailed(err, action))
  }
}
function* api_v1_module_readWatcher() {
  yield takeEvery(types.API_V1_MODULE_READ, api_v1_module_readWorker)
}
function* api_v1_module_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_module_update, action)
    yield put(actions.api_v1_module_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_module_updateFailed(err, action))
  }
}
function* api_v1_module_updateWatcher() {
  yield takeEvery(types.API_V1_MODULE_UPDATE, api_v1_module_updateWorker)
}
function* api_v1_module_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_module_partial_update, action)
    yield put(actions.api_v1_module_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_module_partial_updateFailed(err, action))
  }
}
function* api_v1_module_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MODULE_PARTIAL_UPDATE,
    api_v1_module_partial_updateWorker
  )
}
function* api_v1_module_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_module_delete, action)
    yield put(actions.api_v1_module_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_module_deleteFailed(err, action))
  }
}
function* api_v1_module_deleteWatcher() {
  yield takeEvery(types.API_V1_MODULE_DELETE, api_v1_module_deleteWorker)
}
function* api_v1_paymentmethod_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_list, action)
    yield put(actions.api_v1_paymentmethod_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_listFailed(err, action))
  }
}
function* api_v1_paymentmethod_listWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_LIST,
    api_v1_paymentmethod_listWorker
  )
}
function* api_v1_paymentmethod_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_create, action)
    yield put(actions.api_v1_paymentmethod_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_createFailed(err, action))
  }
}
function* api_v1_paymentmethod_createWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_CREATE,
    api_v1_paymentmethod_createWorker
  )
}
function* api_v1_paymentmethod_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_read, action)
    yield put(actions.api_v1_paymentmethod_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_readFailed(err, action))
  }
}
function* api_v1_paymentmethod_readWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_READ,
    api_v1_paymentmethod_readWorker
  )
}
function* api_v1_paymentmethod_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_update, action)
    yield put(actions.api_v1_paymentmethod_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_updateFailed(err, action))
  }
}
function* api_v1_paymentmethod_updateWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_UPDATE,
    api_v1_paymentmethod_updateWorker
  )
}
function* api_v1_paymentmethod_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_paymentmethod_partial_update,
      action
    )
    yield put(
      actions.api_v1_paymentmethod_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_partial_updateFailed(err, action))
  }
}
function* api_v1_paymentmethod_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_PARTIAL_UPDATE,
    api_v1_paymentmethod_partial_updateWorker
  )
}
function* api_v1_paymentmethod_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_paymentmethod_delete, action)
    yield put(actions.api_v1_paymentmethod_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_paymentmethod_deleteFailed(err, action))
  }
}
function* api_v1_paymentmethod_deleteWatcher() {
  yield takeEvery(
    types.API_V1_PAYMENTMETHOD_DELETE,
    api_v1_paymentmethod_deleteWorker
  )
}
function* api_v1_recording_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_recording_list, action)
    yield put(actions.api_v1_recording_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_recording_listFailed(err, action))
  }
}
function* api_v1_recording_listWatcher() {
  yield takeEvery(types.API_V1_RECORDING_LIST, api_v1_recording_listWorker)
}
function* api_v1_recording_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_recording_create, action)
    yield put(actions.api_v1_recording_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_recording_createFailed(err, action))
  }
}
function* api_v1_recording_createWatcher() {
  yield takeEvery(types.API_V1_RECORDING_CREATE, api_v1_recording_createWorker)
}
function* api_v1_recording_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_recording_read, action)
    yield put(actions.api_v1_recording_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_recording_readFailed(err, action))
  }
}
function* api_v1_recording_readWatcher() {
  yield takeEvery(types.API_V1_RECORDING_READ, api_v1_recording_readWorker)
}
function* api_v1_recording_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_recording_update, action)
    yield put(actions.api_v1_recording_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_recording_updateFailed(err, action))
  }
}
function* api_v1_recording_updateWatcher() {
  yield takeEvery(types.API_V1_RECORDING_UPDATE, api_v1_recording_updateWorker)
}
function* api_v1_recording_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_recording_partial_update,
      action
    )
    yield put(actions.api_v1_recording_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_recording_partial_updateFailed(err, action))
  }
}
function* api_v1_recording_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_RECORDING_PARTIAL_UPDATE,
    api_v1_recording_partial_updateWorker
  )
}
function* api_v1_recording_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_recording_delete, action)
    yield put(actions.api_v1_recording_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_recording_deleteFailed(err, action))
  }
}
function* api_v1_recording_deleteWatcher() {
  yield takeEvery(types.API_V1_RECORDING_DELETE, api_v1_recording_deleteWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err, action))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* api_v1_subscription_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subscription_list, action)
    yield put(actions.api_v1_subscription_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subscription_listFailed(err, action))
  }
}
function* api_v1_subscription_listWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTION_LIST,
    api_v1_subscription_listWorker
  )
}
function* api_v1_subscription_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subscription_create, action)
    yield put(actions.api_v1_subscription_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subscription_createFailed(err, action))
  }
}
function* api_v1_subscription_createWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTION_CREATE,
    api_v1_subscription_createWorker
  )
}
function* api_v1_subscription_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subscription_read, action)
    yield put(actions.api_v1_subscription_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subscription_readFailed(err, action))
  }
}
function* api_v1_subscription_readWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTION_READ,
    api_v1_subscription_readWorker
  )
}
function* api_v1_subscription_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subscription_update, action)
    yield put(actions.api_v1_subscription_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subscription_updateFailed(err, action))
  }
}
function* api_v1_subscription_updateWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTION_UPDATE,
    api_v1_subscription_updateWorker
  )
}
function* api_v1_subscription_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_subscription_partial_update,
      action
    )
    yield put(
      actions.api_v1_subscription_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_subscription_partial_updateFailed(err, action))
  }
}
function* api_v1_subscription_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTION_PARTIAL_UPDATE,
    api_v1_subscription_partial_updateWorker
  )
}
function* api_v1_subscription_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subscription_delete, action)
    yield put(actions.api_v1_subscription_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subscription_deleteFailed(err, action))
  }
}
function* api_v1_subscription_deleteWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTION_DELETE,
    api_v1_subscription_deleteWorker
  )
}
function* api_v1_subscriptiontype_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subscriptiontype_list, action)
    yield put(actions.api_v1_subscriptiontype_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subscriptiontype_listFailed(err, action))
  }
}
function* api_v1_subscriptiontype_listWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTIONTYPE_LIST,
    api_v1_subscriptiontype_listWorker
  )
}
function* api_v1_subscriptiontype_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subscriptiontype_create, action)
    yield put(actions.api_v1_subscriptiontype_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subscriptiontype_createFailed(err, action))
  }
}
function* api_v1_subscriptiontype_createWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTIONTYPE_CREATE,
    api_v1_subscriptiontype_createWorker
  )
}
function* api_v1_subscriptiontype_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subscriptiontype_read, action)
    yield put(actions.api_v1_subscriptiontype_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subscriptiontype_readFailed(err, action))
  }
}
function* api_v1_subscriptiontype_readWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTIONTYPE_READ,
    api_v1_subscriptiontype_readWorker
  )
}
function* api_v1_subscriptiontype_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subscriptiontype_update, action)
    yield put(actions.api_v1_subscriptiontype_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subscriptiontype_updateFailed(err, action))
  }
}
function* api_v1_subscriptiontype_updateWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTIONTYPE_UPDATE,
    api_v1_subscriptiontype_updateWorker
  )
}
function* api_v1_subscriptiontype_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_subscriptiontype_partial_update,
      action
    )
    yield put(
      actions.api_v1_subscriptiontype_partial_updateSucceeded(result, action)
    )
  } catch (err) {
    yield put(actions.api_v1_subscriptiontype_partial_updateFailed(err, action))
  }
}
function* api_v1_subscriptiontype_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTIONTYPE_PARTIAL_UPDATE,
    api_v1_subscriptiontype_partial_updateWorker
  )
}
function* api_v1_subscriptiontype_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_subscriptiontype_delete, action)
    yield put(actions.api_v1_subscriptiontype_deleteSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_subscriptiontype_deleteFailed(err, action))
  }
}
function* api_v1_subscriptiontype_deleteWatcher() {
  yield takeEvery(
    types.API_V1_SUBSCRIPTIONTYPE_DELETE,
    api_v1_subscriptiontype_deleteWorker
  )
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err, action))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err, action))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err, action))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err, action))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err, action))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(
      actions.rest_auth_password_reset_confirm_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.rest_auth_password_reset_confirm_createFailed(err, action)
    )
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err, action))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.rest_auth_registration_verify_email_createFailed(err, action)
    )
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err, action))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err, action))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err, action))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_category_listWatcher,
    api_v1_category_createWatcher,
    api_v1_category_readWatcher,
    api_v1_category_updateWatcher,
    api_v1_category_partial_updateWatcher,
    api_v1_category_deleteWatcher,
    api_v1_course_listWatcher,
    api_v1_course_createWatcher,
    api_v1_course_readWatcher,
    api_v1_course_updateWatcher,
    api_v1_course_partial_updateWatcher,
    api_v1_course_deleteWatcher,
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_enrollment_listWatcher,
    api_v1_enrollment_createWatcher,
    api_v1_enrollment_readWatcher,
    api_v1_enrollment_updateWatcher,
    api_v1_enrollment_partial_updateWatcher,
    api_v1_enrollment_deleteWatcher,
    api_v1_event_listWatcher,
    api_v1_event_createWatcher,
    api_v1_event_readWatcher,
    api_v1_event_updateWatcher,
    api_v1_event_partial_updateWatcher,
    api_v1_event_deleteWatcher,
    api_v1_group_listWatcher,
    api_v1_group_createWatcher,
    api_v1_group_readWatcher,
    api_v1_group_updateWatcher,
    api_v1_group_partial_updateWatcher,
    api_v1_group_deleteWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_lesson_listWatcher,
    api_v1_lesson_createWatcher,
    api_v1_lesson_readWatcher,
    api_v1_lesson_updateWatcher,
    api_v1_lesson_partial_updateWatcher,
    api_v1_lesson_deleteWatcher,
    api_v1_login_createWatcher,
    api_v1_module_listWatcher,
    api_v1_module_createWatcher,
    api_v1_module_readWatcher,
    api_v1_module_updateWatcher,
    api_v1_module_partial_updateWatcher,
    api_v1_module_deleteWatcher,
    api_v1_paymentmethod_listWatcher,
    api_v1_paymentmethod_createWatcher,
    api_v1_paymentmethod_readWatcher,
    api_v1_paymentmethod_updateWatcher,
    api_v1_paymentmethod_partial_updateWatcher,
    api_v1_paymentmethod_deleteWatcher,
    api_v1_recording_listWatcher,
    api_v1_recording_createWatcher,
    api_v1_recording_readWatcher,
    api_v1_recording_updateWatcher,
    api_v1_recording_partial_updateWatcher,
    api_v1_recording_deleteWatcher,
    api_v1_signup_createWatcher,
    api_v1_subscription_listWatcher,
    api_v1_subscription_createWatcher,
    api_v1_subscription_readWatcher,
    api_v1_subscription_updateWatcher,
    api_v1_subscription_partial_updateWatcher,
    api_v1_subscription_deleteWatcher,
    api_v1_subscriptiontype_listWatcher,
    api_v1_subscriptiontype_createWatcher,
    api_v1_subscriptiontype_readWatcher,
    api_v1_subscriptiontype_updateWatcher,
    api_v1_subscriptiontype_partial_updateWatcher,
    api_v1_subscriptiontype_deleteWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
