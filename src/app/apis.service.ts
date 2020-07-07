import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private httpClient: HttpClient) { }

  sendEmail(url, data) {
    return this.httpClient.post(url, data);
  }

  getUsers() {
    return this.httpClient.get("https://app-node-46ee6.web.app/meses");
  }
  getLinkApp() {
    return this.httpClient.get("https://app-node-46ee6.web.app/apps");
  }
  getUsersList(){
    return (this.httpClient.get("https://app-node-46ee6.web.app/api/getUsers")).pipe(map((data:any)=>data["data"]));
 }
}
