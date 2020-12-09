import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as bcrypt from 'bcrypt'
import * as _ from 'lodash'
import { CreateUserDTO } from './dto/create-user.dto'
import { User, UserDocument } from './schemas/user.schema'

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(
    createUserDTO: CreateUserDTO,
    roles: string[]
  ): Promise<UserDocument> {
    const saltRounds = 10
    const salt = await bcrypt.genSalt(saltRounds)
    const hash = await bcrypt.hash(createUserDTO.password, salt)

    const createdUser = new this.userModel(
      _.assignIn(createUserDTO, { password: hash, roles })
    )
    return await createdUser.save()
  }
  async find(id: string): Promise<UserDocument> {
    return await this.userModel.findById(id).exec()
  }
}
