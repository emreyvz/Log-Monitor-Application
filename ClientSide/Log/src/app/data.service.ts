import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { log } from './models/log';
import {Observable} from "rxjs/Observable";
import { map } from "rxjs/operators";
 
@Injectable()

export class DataService{
	
	
	constructor(private http:HttpClient){}
	private _url:string = "https://localhost:44333/api/Log";

	getlogs(){
		return this.http.get<log[]>(this._url);
	}
	
	postlog(log_icerigi:String,logtype:String){
		
		
	const req = this.http.post(this._url, {
      message: log_icerigi,
      log_type: logtype,
    })
      .subscribe(
        res => {
			window.location.reload();
        },
        err => {
          alert("Boş veya hatalı veri eklenemiyor.");
        }
      );
		
	}
	
}