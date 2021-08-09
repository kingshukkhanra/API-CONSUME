import { BlogersService } from './../blogers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blogers } from '../blogers';
@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  constructor(private actRoutes:ActivatedRoute,private blogService:BlogersService) { }
  modelBlogs:any;
  ngOnInit(): void {
    console.log('HomeDetails loaded');
    this.modelBlogs = this.blogService.getValue()
    console.log(this.modelBlogs);
  }

}
