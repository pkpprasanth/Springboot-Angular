import { Component, OnInit ,Input} from '@angular/core';
import{EmployeeService} from "../employee.service";
import{Employee} from"../employee";
import {ListComponent}from '../list/list.component'
import{Router,ActivatedRoute}from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id:number;
  employee:Employee;
  constructor() { }

  ngOnInit(): void {
  }

}
