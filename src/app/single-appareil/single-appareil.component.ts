import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppareilComponent } from '../appareil/appareil.component';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {
  name : string = "Blandine"; 
  status : string = "Status"

  constructor(private appareilservice : AppareilService, 
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; 
    this.name = this.appareilservice.getAppareilById(+id)?.name
    this.status = this.appareilservice.getAppareilById(+id).status
  }

}
