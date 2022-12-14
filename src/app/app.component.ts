import { Component, OnInit } from '@angular/core';
import {AdviceService} from './services/advice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'advice-generator';
  slip: any=[];

  constructor(
    private adviceService: AdviceService
  ){

  }

  ngOnInit(): void {
      this.adviceService.getAdvice().subscribe((res)=> {
        this.slip = res.slip;
        console.log("Status OK");
      })

  }
  consultaAPI(){
    this.ngOnInit();
  }
}
