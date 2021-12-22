import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isSecondPage=false;
  images: any =  [
    {
      src: "assets/images/Twogether-Studios-Showcase-2021-1.jpg",
      caption: "Twogether-Studios-Showcase",
      thumb: "assets/images/Twogether-Studios-Showcase-2021-1.jpg"
   },
   {
    src: "assets/images/Twogether-Studios-Showcase-2021-10.jpg",
    caption: "Twogether-Studios-Showcase",
    thumb: "assets/images/Twogether-Studios-Showcase-2021-10.jpg"
 },
 {
  src: "assets/images/Twogether-Studios-Showcase-2021-14.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-14.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-15.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-15.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-16.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-16.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-17.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-17.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-18.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-18.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-19.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-19.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-20.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-20.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-21.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-21.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-22.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-22.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-23.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-23.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-25.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-25.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-26.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-26.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-27.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-27.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-28.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-28.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-29.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-29.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-30.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-30.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-31.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-31.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-32.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-32.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-33.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-33.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-34.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-34.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-35.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-35.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-36.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-36.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-37.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-37.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-38.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-38.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-39.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-39.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-40.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-40.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-41.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-41.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-42.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-42.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-43.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-43.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-44.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-44.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-45.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-45.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-46.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-46.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-47.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-47.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-48.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-48.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-49.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-49.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-50.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-50.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-51.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-51.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-52.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-52.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-53.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-53.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-54.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-54.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-55.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-55.jpg"
},
{
  src: "assets/images/Twogether-Studios-Showcase-2021-60.jpg",
  caption: "Twogether-Studios-Showcase",
  thumb: "assets/images/Twogether-Studios-Showcase-2021-60.jpg"
},

  ];

  constructor(private _lightbox: Lightbox) {

  }

  ngOnInit(): void {
  }

  nextPage(): void{
    this.isSecondPage=!this.isSecondPage  
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  open(index: number): void {
    // open lightbox
    console.log("==============>", index)
    this._lightbox.open(this.images, index);
  }

  

}
