import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Component } from './component.entity'

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, length: 100, default: 'No prod' })
  name: string

  @Column({ nullable: false, default: 0 })
  price: number

  @Column({ default: true })
  isActive: boolean

  @OneToMany(() => Component, (component) => component.product)
  components: Component[]
}
