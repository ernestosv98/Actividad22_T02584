import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Total = 0;
  transactions = [

  ];

  Income(inp: HTMLInputElement) : void {

    if(inp.value === '' || inp.value < '0') {
      alert('Ingresa un valor mayor a 0!!!');
    }
    else if(inp.value > '0') {
      this.Total += Number(inp.value);
      this.transactions.push(Number(inp.value));
    }
  }

  Expense(inp: HTMLInputElement) : void {

    if(inp.value === '' || inp.value < '0') {
      alert('Ingresa un valor mayor a 0!!!');
    }
    else if (inp.value > '0') {
      this.Total -= Number(inp.value);
      this.transactions.push(Number( - inp.value));
    }
  }
}
