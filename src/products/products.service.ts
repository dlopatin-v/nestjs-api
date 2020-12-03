import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './entities/product.entity'

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>
  ) {}

  getAll(): Promise<Product[]> {
    return this.productRepository.find()
  }

  getById(id: string): Promise<Product> {
    return this.productRepository.findOne(id)
  }

  async remove(id: string): Promise<void> {
    await this.productRepository.delete(id)
  }
}
