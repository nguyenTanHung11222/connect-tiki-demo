import { Controller, Get, Param, Post, Put } from '@nestjs/common';
import { TikiService } from './tiki.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { query } from 'express';


@Controller('tiki')
@ApiTags('tiki')
export class TikiController {
    
    constructor(private readonly tikiService: TikiService) {}

    @ApiBearerAuth()
    @Get('products')
    async getCatFacts() {
        return this.tikiService.getProducts();
    }

    @ApiBearerAuth()
    @Get('productById')
    async getProductById() {
        return this.tikiService.getProductId();
    }

    @ApiBearerAuth()
    @Get('category')
    async getCategory(){
        return this.tikiService.getCategorys();
    }

    // @ApiBearerAuth()
    // @Post('request/product')
    // async createProduct(){
    //     return this.tikiService.createRequestProduct();
    // }

    @ApiBearerAuth()
    @Get('order')
    async getOrder(){
        const query =''
        return this.tikiService.getOrder(query);
    }

    @Put('UpdateSku')
    async updateSKU(){
        return this.tikiService.updateSku();
    }

    @Post('UpdateOriginSku')
    async updateOriginSKU(){
        return this.tikiService.updateOriginSku();
    }

    @Post('UpdateInfor')
    async updateProductInfor(){
        return this.tikiService.updateProductInfor();
    }

    @Get('OrderDetail')
    async getDetail(){
        return this.tikiService.getOrderId();
    }

    @Get('ProductEcommerce/:productId')
    async getProductEcommerce(@Param('productId') productId: number){
        return this.tikiService.getProductEcommerce(productId)
    }

    @Post('SyncProduct/:productId')
    async SyncEcommerceWithTiki(@Param('productId') productId: number){
        return this.tikiService.SyncEcommerceWithTiki(productId)
    }
}
