import { PriceModel } from "./priceModel";

export class BookModel{
    id!: number;
    image!: string;
    title!: string;
    totalPages!: number;
    _author!: string;
    price!: PriceModel;

    public set author(value:string){
      this._author = 'Author: '+ value;
    }
    public get author(){
        return this._author;
    }



}