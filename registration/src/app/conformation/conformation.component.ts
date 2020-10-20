import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-conformation',
  templateUrl: './conformation.component.html',
  styleUrls: ['./conformation.component.css']
})
export class ConformationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
backtohome(){
  this.router.navigateByUrl('/');
}
}
