import { BlogersService } from './../blogers.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Blogers } from '../blogers';
import { FilterPipe } from '../filter.pipe';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

 constructor( private router:Router,private BlogService:BlogersService,private actRoute:ActivatedRoute) { }
 public searchString:any;
 public model = [
       new Blogers('<strong>kingshuk</strong>','<strong>this is shortForm of quotes</strong>','<strong>hello this is one data</strong>','Generic','./assets/man.png'),
       new Blogers('<strong>kingshuk</strong>','<strong>this is shortForm of quotes</strong>','<strong>hello this is one data</strong>','Dance','./assets/man.png'),
       new Blogers('<strong>kingshuk</strong>','<strong>this is shortForm of quotes</strong>','<strong>hello this is one data</strong>','Fight','./assets/man.png'),
       new Blogers('<strong>kingshuk</strong>','<strong>this is shortForm of quotes</strong>','<strong>hello this is one data</strong>','Anime','./assets/man.png'),
       new Blogers('<strong>kingshuk</strong>','<strong>this is shortForm of quotes</strong>','<strong>hello this is one data</strong>','Generic','./assets/man.png'),
    ]
  
  ngOnInit(): void {
    console.warn("Homecomponent is loaded");
    this.searchString = this.actRoute.snapshot.paramMap.get('key');
    console.log("Home component search String",this.searchString);
  }
  ngOnDestroy(): void {
    console.warn("Home component is exited");
  }
 
  onSend(m:Blogers){
     console.log(m);
     this.BlogService.setValue(m);
     this.router.navigate(['details'])
  }

}
   