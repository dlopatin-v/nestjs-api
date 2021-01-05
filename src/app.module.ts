import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { configModule } from 'configure.root'
import { ProductsModule } from './products/products.module'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { AppController } from './app.controller'

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
    AuthModule,
    UsersModule
  ],
  controllers: [AppController]
})
export class AppModule {}
