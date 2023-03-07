import { PriceModel } from "./priceModel";

export class BookModel{
    id!: number;
    image!: string;
    title!: string;
    totalPages!: number;
    published:Boolean = false;
    author!: string;
    price!: PriceModel;
   

    // public set author(value:string){
    //   this._author = 'Author: '+ value;
    // }
    // public get author(){
    //     return this._author;
    // }



}