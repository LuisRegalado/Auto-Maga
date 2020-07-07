import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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
}
