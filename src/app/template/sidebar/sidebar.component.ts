import { Component, OnInit } from '@angular/core';



var data = new Date();
var ano= data.getFullYear();


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})


export class SidebarComponent implements OnInit {

  anoAtual= ano;
  
  constructor() { 

  }

  ngOnInit(): void {
  }

}
