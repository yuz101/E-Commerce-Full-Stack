import jwt from 'jsonwebtoken'

const verifyToken = (request, response, next) => {
  const authHeader = request.headers.token
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) response.status(403).json('Token is not valid!')
      request.user = user
      next()
    })
  } else {
    response.status(401).json('Not authenticated.')
  }
}

const verifyTokenAndAuthorization = (request, response, next) => {
  verifyToken(request, response, () => {
    if (request.user.id === request.params.id || request.user.isAdmin) {
      next()
    } else {
      response.status(403).json('You are not autherized to do this operation')
    }
  })
}

const verifyTokenAndAdmin = (request, response, next) => {
  verifyToken(request, response, () => {
    if (request.user.isAdmin) {
      next()
    } else {
      response.status(403).json('You are not autherized to do this operation')
    }
  })
}

export { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin }
