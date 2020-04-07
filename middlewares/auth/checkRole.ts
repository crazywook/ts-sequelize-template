import { AuthorizationChecker } from 'routing-controllers/AuthorizationChecker'

function getUserRole(id: string): string {
  console.log({ id })
  return 'admin'
}

export const authorizationChecker: AuthorizationChecker = ({ request }, roles) => {
  console.log('authorizationChecker', request)
  const userRole = getUserRole(request.userId)
  return roles.includes(userRole)
}