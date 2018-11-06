export class log{
	
	id:number;
	message:string;
	create_Date:string;
	log_type:string;
	
	
	 constructor(public _id:number, public _message:string,public _create_Date: string,public _log_type: string)
	 {
		this.id = _id;
		this.message = _message;
		this.create_Date = _create_Date;
		this.log_type = _log_type;
				   
	 }
	
}