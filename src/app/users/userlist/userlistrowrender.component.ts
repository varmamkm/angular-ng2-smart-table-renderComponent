
import { Input, Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `<a [routerLink]="['../userdetails', userId]">{{ username }}</a>`,
})

export class UserlistRowRenderComponent implements ViewCell, OnInit {
  public username: string;
  public userId: number;

  @Input()
  public value: string;

  @Input()
  rowData: any;

  ngOnInit() {
    this.username = this.value;
    this.userId= this.rowData.id;
  }
}