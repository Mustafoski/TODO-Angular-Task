import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  date: string;
  stringStatus: string;
  data: any[] | string[] = [
    {
      name: 'Emir Mustafoski',
      date: '2022-01-11',
      status: 'Active',
    },
    {
      name: 'Jasmin Mustafoski',
      date: '2022-02-09',
      status: 'Completed',
    },
    {
      name: 'Edis Regep',
      date: '2022-02-11 ',
      status: 'Active',
    },
    {
      name: 'Natalie Portman',
      date: '2022-01-10',
      status: 'Completed',
    },
  ];
}
