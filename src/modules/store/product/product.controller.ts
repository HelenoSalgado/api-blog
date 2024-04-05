import { 
  Controller, 
  Get, 
  Post, 
  Body, 
  Param, 
  Delete,
  Put, 
  NotFoundException, 
  Query
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto, UpdateProductDto } from './product.dto';

@Controller('product')
export class ProductController {

  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Body() createproduct: CreateProductDto) {
    return await this.productService.create(createproduct);
  }

  @Get()
  async find( 
    @Query('accountId') accountId: number,
    @Query('productId') productId: number
  ) {
    const product = await this.productService.find(accountId, productId);
    if(!product) throw new NotFoundException('product não encontrado');
    return product;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateproduct: UpdateProductDto){
    return await this.productService.update(id, updateproduct);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.productService.remove(id);
  }
}
