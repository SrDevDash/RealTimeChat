import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Owner } from '../mensaje/mensaje.module';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Owner[];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getSalas().valueChanges().subscribe(
      (data: Owner[]) => {
        this.rooms = data;
        console.log(data);
      }
    );
    console.log(this.rooms);
  }

  noc(){
    
  }
}
