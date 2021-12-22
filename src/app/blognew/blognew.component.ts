import { Component, OnInit } from '@angular/core';
import { BlogdetailsService } from '../blogdetails.service'; 
@Component({
  selector: 'app-blognew',
  templateUrl: './blognew.component.html',
  styleUrls: ['./blognew.component.css']
})
export class BlognewComponent implements OnInit {

  constructor(private service:BlogdetailsService) { }
  Blogtypes:any;
  ngOnInit(): void {
    this.Blogtypes=this.service.bloginfo;
  }

}
