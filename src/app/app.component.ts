import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogPost';
  constructor(private router:Router){}
  public searchString:string="";

  Send(s:any){
      this.searchString = s.value;
      console.log("App component search String",s.value);
      this.router.navigate(['home',this.searchString]);
  }
}
