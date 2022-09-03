import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'rooms', component: RoomsComponent},
  {path: 'room/:id', component: RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
