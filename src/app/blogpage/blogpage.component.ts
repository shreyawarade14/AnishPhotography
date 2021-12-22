import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogdetailsService } from '../blogdetails.service';
@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:BlogdetailsService) { }
  getblogId:any;
  Blogtypes:any;

  ngOnInit(): void {
    this.getblogId = this.param.snapshot.paramMap.get('id');
    console.log(this.getblogId,'getblog');
    if(this.getblogId)
    {
      this.Blogtypes = this.service.bloginfo.filter((value)=>{
        return value.id == this.getblogId;
      });
      console.log(this.Blogtypes,'blogdata>>');
    }
  }

}
