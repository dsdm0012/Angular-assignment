import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
  
 
  constructor() { }
  myimg:string = "assets/img/logo.png";
  
  
  ngOnInit(): void {
    this.loadJsFile("assets/custom.js"); 
  }  
  public loadJsFile(url: string) {  
    let node = document.createElement('script');  
    node.src = url;  
    node.type = 'text/javascript';  
    document.getElementsByTagName('head')[0].appendChild(node);  
  } 
  
  }
  
 

