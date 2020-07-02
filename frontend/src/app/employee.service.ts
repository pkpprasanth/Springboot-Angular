import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private url='http://localhost:8086/spring/users/data';

  constructor(private http:HttpClient) { }


  
  getEmployeesList() : Observable<any> {
    return this.http.get(`${this.url}`);
  }
  getEmployeesid(id : number) : Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  deleteEmployees(id:number): Observable<any>{
    return this.http.delete(`${this.url}/${id}`,{responseType:'text'});
  }
  
  createEmployeesList( employee : object) : Observable<any> {
    return this.http.post(`${this.url}`,employee);
  }

  updateEmployees(id:number , value : any): Observable<any>{
    return this.http.put(`${this.url}/${id}`,value);
  }

}

