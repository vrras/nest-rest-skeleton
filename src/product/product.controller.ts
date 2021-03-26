import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from '../models/product';
import { ProductService } from './product.service';

@Crud({
  model: {
    type: Product
  },
})
@Controller('products')
export class ProductsController implements CrudController<Product> {
  constructor(public service: ProductService) {}
}
