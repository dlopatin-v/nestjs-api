import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { genderEnum } from '../enums/gender.enum'
import { roleEnum } from '../enums/role.enum'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ type: String, required: true, index: true, unique: true })
  email: string
  @Prop({ type: String, default: null })
  avatar: string
  @Prop({ type: String, default: null })
  avatarId: string
  @Prop({ type: String, required: true })
  firstName: string
  @Prop({ type: String, required: true })
  lastName: string
  @Prop({ type: String, required: true, enum: Object.values(genderEnum) })
  gender: string
  @Prop(
    raw({
      country: { type: String, default: null },
      city: { type: String, default: null },
      addressLine1: { type: String, default: null },
      addressLine2: { type: String, default: null }
    })
  )
  address: Record<string, any>
  @Prop({ type: String, default: null })
  prefession: string
  @Prop({ type: String, default: null })
  phone: string
  @Prop({ type: [String], required: true, enum: Object.values(roleEnum) })
  role: string[]
  @Prop({ type: String, default: null })
  password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
