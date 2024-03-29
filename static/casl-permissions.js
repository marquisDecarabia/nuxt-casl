import { defineAbility } from '@casl/ability'

export const CASLPermissions = (user) =>
  defineAbility((can) => {
    if (user.PROJECT_WORK_SECTION) {
      can('add', 'ProjectSection')
      can('edit', 'ProjectSection')
      can('delete', 'ProjectSection')
    }
    if (user.PROJECT_WORK_USER) {
      can('view', 'ProjectUsers')
      can('add', 'ProjectUsers')
      can('edit', 'ProjectUsers')
      can('delete', 'ProjectUsers')
    }
    if (user.PROJECT_VIEW_SECTION) {
      can('viewSelf', 'ProjectSection')
    }
    if (user.PROJECT_WORK_TASK) {
      can('add', 'ProjectTasks')
      can('edit', 'ProjectTasks')
      can('delete', 'ProjectTasks')
    }
    if (user.PROJECT_EDIT_MIN_TASK) {
      can('editMin', 'ProjectTasks')
    }
    if (user.PROJECT_SELF_TASK) {
      can('viewSelf', 'ProjectTasks')
    }
    if (user.ADD_USER) {
      can('add', 'ProjectUsers')
    }
  })
