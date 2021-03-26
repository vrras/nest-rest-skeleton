import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from './modules/config/config.module';
import { DatabaseModule } from './modules/database/database.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    ProductModule,
  ]
})
export class AppModule {}
