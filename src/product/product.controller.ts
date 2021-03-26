import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from '../shared/models/product';
import { ProductService } from './product.service';

@Crud({
  model: {
    type: Product
  },
})
@ApiTags('Products')
@Controller('products')
@ApiBearerAuth()
export class ProductController implements CrudController<Product> {
  constructor(public service: ProductService) {}
}
