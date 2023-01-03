import { ForbiddenException, Injectable } from '@nestjs/common';
//import * as axios from "axios";
import { HttpService } from '@nestjs/axios';
import axios from 'axios';
let obj = {
    "category_id": 1685,
    "name": "Áo thun nam unisex",
    "description":"ÁO THUN CHO NAM LÀ KIỂU DÁNG CƠ BẢN. TỪ CỔ ĐIỂN CỔ ĐIỂN ĐẾN CÁC PHIÊN BẢN LIÊN TỤC, CHÚNG ĐẾN Ở NHIỀU HÌNH DẠNG VÀ SILHOUETTES. KIỂU DÁNG DÀI, NGẮN NGẮN VÀ SLEEVELESS LÀ TẤT CẢ CÁC LỰA CHỌN TRONG BỘ SƯU TẬP CỦA CHÚNG TÔI. DÙ BẠN ƯU ĐÃI CÁC THIẾT KẾ CÓ DÂY CHUYỀN HOẶC SLOGAN, CÁC MẪU CƠ BẢN HOẶC HOA, MÀU SẮC CỦA BẠN ĐƯỢC BẢO HIỂM.",
    "market_price": 100000,
    "attributes": {
          "bulky": 0,
          "origin": "Anh, Việt Nam",
          "product_top_features": "ÁO THUN CHO NAM LÀ KIỂU DÁNG CƠ BẢN. TỪ CỔ ĐIỂN CỔ ĐIỂN ĐẾN CÁC PHIÊN BẢN LIÊN TỤC, CHÚNG ĐẾN Ở NHIỀU HÌNH DẠNG VÀ SILHOUETTES. KIỂU DÁNG DÀI, NGẮN NGẮN VÀ SLEEVELESS LÀ TẤT CẢ CÁC LỰA CHỌN TRONG BỘ SƯU TẬP CỦA CHÚNG TÔI. DÙ BẠN ƯU ĐÃI CÁC THIẾT KẾ CÓ DÂY CHUYỀN HOẶC SLOGAN, CÁC MẪU CƠ BẢN HOẶC HOA, MÀU SẮC CỦA BẠN ĐƯỢC BẢO HIỂM.",
          "brand": "No Brand",
          "product_height" : 15,
          "product_length" : 20,
          "product_weight_kg" : 2,
          "product_width" : 30,
      },
      "image": "https://ecommerce-api.vndigitech.com/upload/product/6462420800_6_1_1-4148.jpg",
      "images": [
          "https://ecommerce-api.vndigitech.com/upload/product/6462420800_6_1_1-4148.jpg"
      ],
      "option_attributes": [
        "size",
        "color"
      ],
      "variants": [
          {
              "sku": "abcs4",
              "price": 99000,
              "inventory_type": "dropship",
              "seller_warehouse": "371835",
              "warehouse_stocks": [
                  {
                      "warehouseId": 371835,
                      "qtyAvailable": 3
                  }
              ],
              "image": "https://ecommerce-api.vndigitech.com/upload/product/6462420800_6_1_1-4148.jpg"
          }
      ],
      "certificate_files": [
          {
            "url": "https://i.pinimg.com/236x/16/83/c3/1683c385af85d756f8fab83a93d48063.jpg",
            "type": "brand"
          }
      ],
      "meta_data": {
          "is_auto_turn_on": true
      }
}

let updateSKU ={
    "original_sku" : "xxx-yyy-123",
    "product_id": 207780699,
    "price": 100000,
    "active": 1
  }
let updateOriginSKUNew={
    "product_id": 213702084,
    "original_sku":"s55"
}

let updateInfor = {
    "product_id": 207780699,
    "images":[
        'https://ecommerce-api.vndigitech.com/upload/product/6462420800_6_2_1-76ff.jpg',
        'https://ecommerce-api.vndigitech.com/upload/product/6462420800_6_3_1-5ddc.jpg'
    ]
}
// "attributes": {
//     "description": "Áo polo màu đen loại 1, thiết kể thời trang phù hợp với mọi lứa tuổi"
// },
// "image": "https://ecommerce-api.vndigitech.com/upload/product/6462420800_6_1_1-4148.jpg",


let authen = 'Bearer 7Flh2u-emArgpRsavpX7MUL-f82cQ90NzU5oM9C6bfk.gOJB99y-dP0MIJBuoW8J2BJ2T8TPVYDe8zTspvIxISQ'
@Injectable()
export class TikiService {
    constructor(
        private http: HttpService
    ) {}

    async getProducts(){
        const response = await axios({
            method: 'GET',
            url: 'https://api.tiki.vn/integration/v2.1/products',
            headers: {
                Authorization:authen,
            },
        }).catch(() => {
            throw new ForbiddenException('API not available');
        });
        //console.log('🚀 ~ file: index.tsx:137 ~ handleTest ~ res', response.data);
        return response.data
    }

    async getCategorys(){
        const response = await axios({
            method: 'GET',
            url: 'https://api.tiki.vn/integration/v2/categories',
            headers: {
                Authorization:authen,
            },
            
        }).catch(() => {
            throw new ForbiddenException('API not available');
        });
        //console.log('🚀 ~ file: index.tsx:137 ~ handleTest ~ res', response.data);
        return response.data
    }
    

    async createRequestProduct(Data : any){
        const response = await axios({
            method: 'POST',
            url: 'https://api.tiki.vn/integration/v2.1/requests', // api tiki version 2.1
            data:Data, // Data has been converted to the typeof Tiki
            headers: {
                Authorization:authen, //token verify seller
            },
        }).catch(() => {
            throw new ForbiddenException('API not available');
        });
        console.log("🚀 ~ file: tiki.service.ts:153 ~ TikiService ~ createRequestProduct ~ response", response)
        return response.data
    }




    async getOrder(query : string){
        
        let url : string
        if(query != ''){
            url = 'https://api.tiki.vn/integration/v2/orders'
        }
        else url = `https://api.tiki.vn/integration/v2/orders?${query}`

        const response = await axios({
            method: 'GET',
            url: url,
            headers: {
                Authorization:authen,
            },
        }).catch(() => {
            throw new ForbiddenException('API not available');
        });
        console.log('🚀 ~ file: index.tsx:137 ~ handleTest ~ res', response.data);
        return response.data
    }



    async updateSku(){
        const response = await axios({
            method: 'PUT',
            url: 'https://api.tiki.vn/integration/v2.1/products/updateSku',
            data: updateSKU,
            headers: {
                Authorization:authen,
            },
        }).catch(() => {
            throw new ForbiddenException('API not available');
        });
        console.log("🚀 ~ file: tiki.service.ts:183 ~ TikiService ~ updateSku ~ response", response)
        return response.data
    }
    
    async updateOriginSku(){
        const response = await axios({
            method: 'POST',
            url: 'https://api.tiki.vn/integration/v2/products/updateOriginalSku',
            data: updateOriginSKUNew,
            headers: {
                Authorization:authen,
            },
        }).catch(() => {
            throw new ForbiddenException('API not available');
        });
        console.log("🚀 ~ file: tiki.service.ts:198 ~ TikiService ~ updateOriginSku ~ response", response)
        return response.data
    }

    async updateProductInfor(){
        const response = await axios({
            method: 'POST',
            url: 'https://api.tiki.vn/integration/v2/requests/updateProductInfo',
            data: updateInfor,
            headers: {
                Authorization:authen,
            },
        }).catch(() => {
            throw new ForbiddenException('API not available');
        });
        console.log('🚀 ~ file: index.tsx:137 ~ handleTest ~ res', response.data);
        return response.data
    }



    //https://ecommerce-api.vndigitech.com/upload/product/6462420800_6_1_1-4148.jpg
    //https://api.tiki.vn/integration/v2.1/products/

    async getProductId(){
        const response = await axios({
            method: 'GET',
            params: {productId:213702084},
            //includes=seller,categories,attributes,inventory,images 
            url: `https://api.tiki.vn/integration/v2.1/products/213702084?includes=seller,categories,attributes,inventory,images`,
            headers: {
                Authorization:authen,   
            },

        }).catch(() => {
            throw new ForbiddenException('API not available');
        });
        console.log('🚀 ~ file: index.tsx:137 ~ handleTest ~ res', response.data);
        return response.data
    }

    async getOrderId(){
        
        // orderId là code trong hàm getAllOrder() 
        let orderId = 245167000

        let url = `https://api.tiki.vn/integration/v2/orders/245167000?include=status_histories`
        
        // if (query != '') {
        //     url = url+`?include=${query}`
        // }


        //let s = `include=status_histories,item.fees`
        const response = await axios({
            method: 'GET',
            url: `https://api.tiki.vn/integration/v2/orders/${orderId}?include=status_histories,item.fees`,
            headers: {
                Authorization:authen,   
            },

        }).catch(() => {
            throw new ForbiddenException('API not available');
        });
        console.log('🚀 ~ file: index.tsx:137 ~ handleTest ~ res', response.data);
        return response.data
    }


    async getProductEcommerce(id : number){
        //http://103.98.160.114:4000/product/1
        const response = await axios({
            method: 'GET',
            url: `http://103.98.160.114:4000/product/${id}`,

        }).catch(() => {
            return response
        });
        // console.log('🚀 ~ file: index.tsx:137 ~ handleTest ~ res', response.data);
        return response.data
    }

    async SyncEcommerceWithTiki(id : number){
        let product = await this.getProductEcommerce(id)


        let variants = []

        for (let index = 0; index < product.infomations.length; index++) {

            let data ={sku : product.infomations[index].SKU,
                option1 : product.infomations[index].color.description,
                option2 : product.infomations[index].size.size,
                price : product.price,
                inventory_type : "dropship",
                seller_warehouse : "371835",
                warehouse_stocks : [
                    {
                        "warehouseId": 371835,
                        "qtyAvailable": 3
                    }
                ],
                image : product.imageUrl }

            variants.push(data)
        } 


        let protiki ={
                    category_id : 1685,
                    name : product.name,
                    description :product.vnDescription,
                    market_price : product.price,
                    attributes : {
                        bulky : 0,
                        origin : "Việt Nam",
                        product_top_features : product.vnIntroduction,
                        brand : product.providerName,
                        product_height : 15,
                        product_length : 20,
                        product_weight_kg : 2,
                        product_width : 30,
                    },
                    image: product.imageUrl,
                    images: [
                        product.imageUrl
                    ],
                    option_attributes: ["size","color"],
                    variants: variants,
                    certificate_files : [
                        {
                            url : "https://tqc.vn/pic/New/images/chung-nhan-hop-quy-quan-ao-4.jpg",
                            type : "brand"
                        }
                    ],
                    meta_data : {
                        is_auto_turn_on : true
                    }
        }
        let check = this.createRequestProduct(protiki);
        return check
    }

}
