import { Injectable } from '@angular/core';
import { Blogers } from './blogers';
@Injectable({
  providedIn: 'root'
})
export class BlogersService {
  public data:any;
  constructor() { }

  setValue(blog:Blogers){
     this.data = blog;
  }
  getValue(){
    return this.data;
  }
}
