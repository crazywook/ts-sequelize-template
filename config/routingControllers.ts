import config from 'config'
import cors from 'cors'

export function getCors() {

  const originAccessor =  'server.cors.origin'

  if (config.has(originAccessor)) {

    const origin: string[] = config.get('server.cors.origin')  
    const corsOption: cors.CorsOptions = {
      credentials: true,
      origin,
      methods: ['GET', 'PUT', 'DELETE', 'OPTIONS'],
    }
    return corsOption
  }

  throw new Error('There is no cors config')
}
