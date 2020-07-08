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
  usuarios(url,data){
    return this.httpClient.post(url,data)
  }
  getUsuarios(){
    return this.httpClient.get("http://localhost:5000/api/getUsers")
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
  getDriversList(){
    return (this.httpClient.get("https://app-node-46ee6.web.app/api/getDrivers")).pipe(map((data:any)=>data["data"]));
  }
  getUnitiesList(){
    return (this.httpClient.get("https://app-node-46ee6.web.app/api/getUnity")).pipe(map((data:any)=>data["data"]));
  }
}
