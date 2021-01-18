import { Ability } from '@casl/ability'
import { CASLPermissions } from '~/static/casl-permissions'

export const getters = {
  userPermissions(_state, _getters, rootState) {
    return {
      isAdmin: rootState.userInfoModule.user.isAdmin,
      PROJECT_WORK_USER: rootState.projectsModule.projectPermissionsModule.projectPermissions.includes(
        'PROJECT_WORK_USER'
      ),
      PROJECT_WORK_SECTION: rootState.projectsModule.projectPermissionsModule.projectPermissions.includes(
        'PROJECT_WORK_SECTION'
      ),
      PROJECT_VIEW_SECTION: rootState.projectsModule.projectPermissionsModule.projectPermissions.includes(
        'PROJECT_VIEW_SECTION'
      ),
      PROJECT_WORK_TASK: rootState.projectsModule.projectPermissionsModule.projectPermissions.includes(
        'PROJECT_WORK_TASK'
      ),
      PROJECT_EDIT_MIN_TASK: rootState.projectsModule.projectPermissionsModule.projectPermissions.includes(
        'PROJECT_EDIT_MIN_TASK'
      ),
      PROJECT_SELF_TASK: rootState.projectsModule.projectPermissionsModule.projectPermissions.includes(
        'PROJECT_SELF_TASK'
      ),
      PROJECT_GANT: rootState.projectsModule.projectPermissionsModule.projectPermissions.includes(
        'PROJECT_GANT'
      ),
      ADD_USER: rootState.projectsModule.projectPermissionsModule.projectPermissions.includes(
        'add_user'
      ),
    }
  },
  userAbilities(_state, getters, rootState) {
    if (!rootState.authModule.isLoggedIn) return getters.ability
    return CASLPermissions(getters.userPermissions)
  },
  ability() {
    return new Ability()
  },
}
