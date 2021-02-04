import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Generic2Service {

  constructor(private http: HttpClient) { }

  getItem(url:string){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
   const dinamicUrl = url;
   return this.http.get(`${environment.API_DISAIC_URL}/${dinamicUrl}`,{ headers: reqHeader })
  }

  postItem(data,url:string){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
   const dinamicUrl = url;
    return this.http.post(`${environment.API_DISAIC_URL}/${dinamicUrl}`,data,{ headers: reqHeader })
  }

  updateItem(data, url:string, id:number){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
   const dinamicUrl = url;
    return this.http.post(`${environment.API_DISAIC_URL}/${dinamicUrl}/${id}`,data,{ headers: reqHeader })
  }

  deleteItem(id:number, url:string){
    var reqHeader = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
   });
   const dinamicUrl = url;
    return this.http.delete(`${environment.API_DISAIC_URL}/${dinamicUrl}/${id}`,{ headers: reqHeader })
  }

}
