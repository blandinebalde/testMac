import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName: string | undefined;

  @Input() appareilStatus: string | undefined  ;

  @Input()
   indexOfAppareil!: number | number;


  constructor(private appareilService: AppareilService) { }

  ngOnInit(): void {
  }

  getStatus(){
    return this .appareilStatus;
  }

  getColor(){
    if (this.appareilStatus == 'allumé') {
      return 'green';
    }else{
      return 'red';
    }
  }

  onSwitchOn(){
    this.appareilService.swithOnOne(this.indexOfAppareil);
  }

  onSwitchOff(){
    this.appareilService.swithOffOne(this.indexOfAppareil);
  }

}
