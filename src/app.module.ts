import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { configModule } from 'configure.root'
import { ProductsModule } from './products/products.module'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    configModule,
    MongooseModule.forRoot(process.env.MONGODB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }),
    ProductsModule,
    UserModule
  ]
})
export class AppModule {}
