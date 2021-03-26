import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    SharedModule,
    ProductModule,
  ]
})
export class AppModule {}
