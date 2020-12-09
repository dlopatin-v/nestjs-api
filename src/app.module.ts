import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductsModule } from './products/products.module'
import { UserModule } from './user/user.module';

const environment = process.env.NODE_ENV || 'development'

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: `.env.${environment}`,
      isGlobal: true
    }),
    MongooseModule.forRoot(process.env.MONGODB_CONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }),
    ProductsModule,
    UserModule
  ]
})
export class AppModule {}
