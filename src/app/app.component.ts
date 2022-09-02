import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent  {


  constructor(){}
  // title = 'Blandine balde';
  // isAuth = false ;
  // lastUpdate = new Promise<Date>(
  //   (resolve, reject) => {
  //     const date = new Date();
  //     setTimeout(
  //       ()=>{
  //         resolve(date); 3000
  //       }
  //     );
  //   }
  // )
   
  // appareils: any[] = []; 
  
  // constructor(private appareilService: AppareilService ){
  //   setTimeout(
  //     () => {
  //         this.isAuth = true;
  //     } , 4000
  //   );
  // }
  // ngOnInit(): void {
  //   this.appareils = this.appareilService.appareils 
  // }

  // onAllumer(){
  //   this.appareilService.swithOnAll();
  // }

  // onEteindre(){
  //   this.appareilService.swithOfAll();
  // }
}
