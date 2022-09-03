import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Mensaje } from '../mensaje/mensaje.module';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  public roomName: string;
  public mensajes: Mensaje[];
  inputForm: FormGroup;
  constructor(private router: ActivatedRoute, private dataService: DataService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.roomName = this.router.snapshot.paramMap.get('id');
    this.router.queryParams.subscribe(
      (queryParametros) => {
        console.log(queryParametros);
      }
    );
    this.dataService.getMensajes(this.roomName).valueChanges().subscribe(
      (data: Mensaje[]) => {
        this.mensajes = data;
      }
      );
      this.inputForm = this.fb.group({
        text: ['',Validators.required]
      })
  }
  
  enviarMensaje(){
    this.dataService.enviarMensajeSala(this.roomName,this.inputForm.value.text);
    this.inputForm.controls['text'].setValue('');
  }
}
