import {Component} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import { DataService } from './data.service';
import { log } from './models/log';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	
	loglar:log[]=[];
	log_icerigi:String;
	logtype:String;
	show:boolean = true;
	
	constructor(private _dataService:DataService){
		 this._dataService.getlogs().subscribe((response => this.loglar=response));	 
	}
	
	log_gonder(){
		this._dataService.postlog(this.log_icerigi,this.logtype);
	}
	


}
