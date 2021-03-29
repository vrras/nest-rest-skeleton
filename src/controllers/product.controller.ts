import { Controller } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Crud, CrudController } from '@nestjsx/crud';
import { Product } from '../shared/models/product';
import { ProductService } from '../services/product.service';

@Crud({
  model: {
    type: Product
  },
  params: {
    productId: {
      field: 'productId',
      type: 'number',
      primary: true,
    },
  },
  routes: {
    replaceOneBase: {
      allowParamsOverride: true,
    },
    updateOneBase: {
      allowParamsOverride: true,
    },
    deleteOneBase: {
      returnDeleted: true,
    },
  },
})
@ApiTags('Products')
@ApiBearerAuth()
@Controller('products')
export class ProductController implements CrudController<Product> {
  constructor(public service: ProductService) {}
}
