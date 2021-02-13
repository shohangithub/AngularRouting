import { Injectable } from '@angular/core';
import { BaseDataService } from 'src/app/core/service/base.data.svc';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private item:Item,private dataSvc:BaseDataService) { }
   
  getItem =()=>{
    this.dataSvc.getAll(0);
  }
}
