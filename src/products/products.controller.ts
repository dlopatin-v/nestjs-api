import { Controller, Get } from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

@ApiTags('products')
@Controller('products')
export class ProductsController {
  @Get()
  @ApiOperation({ summary: 'Get list of products' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAll(): string[] {
    return ['test']
  }
}
