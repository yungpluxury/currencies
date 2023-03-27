import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { ICurrency } from "../models/currency"

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(
    private http: HttpClient
  ) { }

  getUSD(): Observable<ICurrency> {
    return this.http.get<ICurrency>('https://api.freecurrencyapi.com/v1/latest?apikey=OvMeyhOHCsTpm3ZRWtN9o3pRpAapgJuQUQ7QLTXc&currencies=RUB&base_currency=USD')
  }
  getEUR(): Observable<ICurrency> {
    return this.http.get<ICurrency>('https://api.freecurrencyapi.com/v1/latest?apikey=OvMeyhOHCsTpm3ZRWtN9o3pRpAapgJuQUQ7QLTXc&currencies=RUB&base_currency=EUR')
  }
  getGBP(): Observable<ICurrency> {
    return this.http.get<ICurrency>('https://api.freecurrencyapi.com/v1/latest?apikey=OvMeyhOHCsTpm3ZRWtN9o3pRpAapgJuQUQ7QLTXc&currencies=RUB&base_currency=GBP')
  }

  getCNY(): Observable<ICurrency> {
    return this.http.get<ICurrency>('https://api.freecurrencyapi.com/v1/latest?apikey=OvMeyhOHCsTpm3ZRWtN9o3pRpAapgJuQUQ7QLTXc&currencies=RUB&base_currency=CNY')
  }

  getJPY(): Observable<ICurrency> {
    return this.http.get<ICurrency>('https://api.freecurrencyapi.com/v1/latest?apikey=OvMeyhOHCsTpm3ZRWtN9o3pRpAapgJuQUQ7QLTXc&currencies=RUB&base_currency=JPY')
  }

  getTRY(): Observable<ICurrency> {
    return this.http.get<ICurrency>('https://api.freecurrencyapi.com/v1/latest?apikey=OvMeyhOHCsTpm3ZRWtN9o3pRpAapgJuQUQ7QLTXc&currencies=RUB&base_currency=TRY')
  }
}
