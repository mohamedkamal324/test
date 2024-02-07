import { Component } from '@angular/core';

interface IMG{
  iPath:string
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  path:IMG[] = [
    {iPath:"assets/images/poert1.png"},
    {iPath:"assets/images/port2.png"},
    {iPath:"assets/images/port3.png"},
    {iPath:"assets/images/poert1.png"},
    {iPath:"assets/images/port2.png"},
    {iPath:"assets/images/port3.png"}
  ]
  detailedPath:string=''
  getImg(path:string){
    this.detailedPath=path
    console.log(this.detailedPath);
  }
  isclicked:boolean=false;
  isOpened:boolean=false;
  stop(event:any){
    event.stopPropagation();
  }
}
