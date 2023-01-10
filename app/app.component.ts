import { Component } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Crud';

  productid:number=0;
  productname:string="";
  productbrand:string="";
  productquantity:number=0;
  productprice:number=0;
  vat:number=0;
  discount:number=0;
  totalprice:number=0;
  image:string="";
  message:string="";
  errormessage:string="";
  isEdit:boolean=false;
  isAdd:boolean=false;

  stArray:Product[];
  constructor(private p:ProductService){
   this.stArray=this.p.getProducts();
  }
 
  addProducts(){
    let f=this.stArray.find((data)=>data.productid==this.productid)
    if(f==null && this.productid!=0){
      this.stArray.push(new Product(this.productid,this.productname,this.productbrand,this.productquantity,this.productprice,this.vat,this.discount,this.totalprice,this.image))
      this.isAdd=false;
      this.message="Successfully Added Product";
      this.errormessage="";
    }else{
      this.message="";
      this.errormessage="Product All Ready Exists"
    }
  }
  deleteProducts(id:number){
    id:Number
    for (let i = 0; i <this.stArray.length; i++) {
      if(id==this.stArray[i].productid){
        this.stArray.splice(i,1);
        this.message="Successfully Deleted Employee";
        this.errormessage="";
      } else{
        this.message="";
        this.errormessage="All Ready Deleted Employee";
      }   
    }
  }
  edit(){
    this.isEdit=true;
  }
  add(){
    this.isAdd=true;
  }
  updateProducts(productid:number,productname:string,productbrand:string,productquantity:number,productprice:number,vat:number,discount:number,totalprice:number,image:string){
    pid:Number
    for (let i = 0; i <this.stArray.length; i++) {
      if(productid==this.stArray[i].productid){
        this.stArray[i].productname=this.productname;
        this.stArray[i].productbrand=this.productbrand;
        this.stArray[i].productprice=this.productprice;
        this.stArray[i].vat=this.vat;
        this.stArray[i].discount=this.discount;
        this.stArray[i].totalprice=this.totalprice;
        this.stArray[i].image=this.image;
        this.isEdit=false;
        
        this.message="Successfully Updated Product";
        this.errormessage="";
      } else{
        this.message="";
        this.errormessage="All Ready Updated Product";
      }   
    }

  }
  
  m1(value:any){
    this.productid=this.stArray[value].productid;
    this.productname=this.stArray[value].productname;
    this.productbrand=this.stArray[value].productbrand;
    this.productquantity=this.stArray[value].productquantity;
    this.productprice=this.stArray[value].productprice;
    this.vat=this.stArray[value].vat;
    this.discount=this.stArray[value].discount;
    this.totalprice=this.stArray[value].totalprice;
    this.image=this.stArray[value].image;
  }
  sts:boolean=false
  selectedProduct:any

}
