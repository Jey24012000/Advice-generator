import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advice } from '../../model/advice.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {

  API = 'https://api.adviceslip.com/advice';

  constructor(
    private http: HttpClient
  ) { }

  public getAdvice(): Observable<Advice>{
    return this.http.get<Advice>(this.API);

  }
}
