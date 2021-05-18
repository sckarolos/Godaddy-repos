import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SharedTableDetailsService {
    dataSource: any;

    constructor() { }
    
    setData(data: any) {
      console.log('in service set', data);
    }

}



