import { Component } from '@angular/core';
import { ICurrency, IItem } from "./models/currency";
import { CurrencyService } from "./services/currency.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Currency RUB';
  loading = true
  show = true
  interval: any
  date: Date = new Date()

  usd: ICurrency
  eur: ICurrency
  gbp: ICurrency
  cny: ICurrency
  jpy: ICurrency
  try: ICurrency

  usdValue: IItem = {
    prev: 0,
    current: 0
  }
  usdDiff: number
  eurValue: IItem = {
    prev: 0,
    current: 0
  }
  eurDiff: number
  gbpValue: IItem = {
    prev: 0,
    current: 0
  }
  gbpDiff: number
  cnyValue: IItem = {
    prev: 0,
    current: 0
  }
  cnyDiff: number
  jpyValue: IItem = {
    prev: 0,
    current: 0
  }
  jpyDiff: number
  tryValue: IItem = {
    prev: 0,
    current: 0
  }
  tryDiff: number

  constructor(
    public currencyService: CurrencyService
  ) {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.checkUpdate();
    }, 5000);
    this.checkUpdate();
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000);
  }

  onClick() {
    this.show = !this.show
  }

  checkUpdate() {
    this.loading = false
    this.currencyService.getUSD().subscribe( ( res:ICurrency ) => {
      this.usdDiff = this.usdValue.current - this.usdValue.prev
      this.usdValue.current = res.data.RUB
      if (this.usdValue.prev == 0) {
        this.usdValue.prev = res.data.RUB
      } else {
        this.usdValue.prev = this.usd.data.RUB
      }
      this.usd = res
    })
    this.currencyService.getEUR().subscribe( ( res:ICurrency ) => {
      this.eurDiff = this.eurValue.current - this.eurValue.prev
      this.eurValue.current = res.data.RUB
      if (this.eurValue.prev == 0) {
        this.eurValue.prev = res.data.RUB
      } else {
        this.eurValue.prev = this.eur.data.RUB
      }
      this.eur = res
    })
    this.currencyService.getGBP().subscribe( ( res:ICurrency ) => {
      this.gbpDiff = this.gbpValue.current - this.gbpValue.prev
      this.gbpValue.current = res.data.RUB
      if (this.gbpValue.prev == 0) {
        this.gbpValue.prev = res.data.RUB
      } else {
        this.gbpValue.prev = this.gbp.data.RUB
      }
      this.gbp = res
    })
    this.currencyService.getCNY().subscribe( ( res:ICurrency ) => {
      this.cnyDiff = this.cnyValue.current - this.cnyValue.prev
      this.cnyValue.current = res.data.RUB
      if (this.cnyValue.prev == 0) {
        this.cnyValue.prev = res.data.RUB
      } else {
        this.cnyValue.prev = this.cny.data.RUB
      }
      this.cny = res
    })
    this.currencyService.getJPY().subscribe( ( res:ICurrency ) => {
      this.jpyDiff = this.jpyValue.current - this.jpyValue.prev
      this.jpyValue.current = res.data.RUB
      if (this.jpyValue.prev == 0) {
        this.jpyValue.prev = res.data.RUB
      } else {
        this.jpyValue.prev = this.jpy.data.RUB
      }
      this.jpy = res
    })
    this.currencyService.getTRY().subscribe( ( res:ICurrency ) => {
      this.tryDiff = this.tryValue.current - this.tryValue.prev
      this.tryValue.current = res.data.RUB
      if (this.tryValue.prev == 0) {
        this.tryValue.prev = res.data.RUB
      } else {
        this.tryValue.prev = this.try.data.RUB
      }
      this.try = res
    })

  }
}
