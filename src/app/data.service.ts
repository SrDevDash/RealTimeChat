import { getLocaleTimeFormat } from '@angular/common';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Mensaje } from './mensaje/mensaje.module';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  public myName: string = 'Macaco';
  mensajeLenght: number;

  constructor(private firestore: AngularFirestore) { }

  crearSala(nick:string){
    console.log('[creandoSala] ' + nick);
    this.firestore.collection('salas').doc(nick).set({owner: nick});
    let lastId = this.firestore.collection('salas').doc<Mensaje>(nick).valueChanges().subscribe(
      (data) => {
        console.log(data + 'DAtosssss');
      }
    );
    return  this.firestore.collection('salas').doc(nick).collection('Mensajes').doc('PrimerMensaje').set({nick: 'Admin', mensaje: 'Bienvenidos', id: 1});

  }

  UnirseSala(){

  }

  getSalas(){
    return this.firestore.collection('salas');
  }

  getMensajes(id: string){
    return this.firestore.collection<{owner: string}>('salas').doc(id).collection('Mensajes');
  }

  enviarMensajeSala(nick: string, txt:string){
    console.log(nick);
    console.log(txt);
    console.log(this.myName);
    this.getLenghtMensajes(nick);
    console.log(this.mensajeLenght);
    return this.firestore.collection('salas').doc(nick).collection('Mensajes').add({nick : this.myName, mensaje: txt, id: this.mensajeLenght });
  }

  getLenghtMensajes(nick:string){
    let cantidad: number;
     this.firestore.collection('salas').doc(nick).collection('Mensajes').valueChanges().subscribe(
      (data) => {
        this.mensajeLenght =  data.length;
      }
    )
    
    
  }
}
