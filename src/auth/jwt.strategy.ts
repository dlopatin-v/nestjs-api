import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { passportJwtSecret } from 'jwks-rsa'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: `https://localhost:5001/`,
      issuer: `https://localhost:5001/`,
      secretOrKey: 'secret'
    })
  }

  async validate(payload: any) {
    return payload
  }
}
