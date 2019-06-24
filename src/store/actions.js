export function addTodo(text) {
    return {
      type: 'ADD_TODO',
      text
    }
}

export function ageUp() {
  return {
    type: 'AGE_UP'
  }
}

export function ageDown() {
  return {
    type: 'AGE_DOWN'
  }
}

export function getUsers() {
  return {
    type: 'GET_USERS'
  }
}

export function receiveUsers(users) {
  return {
    type: 'RECEIVE_USERS',
    users
  }
}