import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'
import { Product } from './product.entity'

@Entity()
export class Component {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ nullable: false, length: 100, default: 'No component' })
  name: string

  @Column({ nullable: false, default: 0 })
  price: number

  @ManyToOne(() => Product, (product) => product.components, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  product: Product
}
