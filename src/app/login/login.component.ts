import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {DataService} from '../data.service';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  inputForm: FormGroup;
  constructor(private fb: FormBuilder, private dataService: DataService, private routers: Router) { }

  ngOnInit(): void {
    this.inputForm = this.fb.group({
      nick: ['',Validators.required]
    })
  }

  crearSala(){
    
    this.dataService.crearSala(this.inputForm.value.nick);
    this.dataService.myName = this.inputForm.value.nick;
    this.routers.navigate(['/room/'+ this.inputForm.value.nick]);
  }

  leer(){
    this.dataService.myName = this.inputForm.value.nick;
    this.routers.navigate(['/rooms']);
  }
}
