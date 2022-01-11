import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import TrmApi from "trm-api";

@Injectable({
  providedIn: 'root'
})
export class BitcoinsService {

  private bitcoins_tmp: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public bitcoins: Observable<any> = this.bitcoins_tmp.asObservable();

  private bitcoins_today_tmp: BehaviorSubject<any> = new BehaviorSubject<any>([]);
  public bitcoins_today: Observable<any> = this.bitcoins_today_tmp.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  getBitcoins() {
    this.http.get('http://localhost:3000/bitcoins')
      .subscribe(
        (res) => {
          this.bitcoins_tmp.next(res);
          return res;
        }
      );
  }

  getBitcoinToday() {
    this.http.get('http://localhost:3000/bitcoins/today')
      .subscribe(
        (res) => {
          this.bitcoins_today_tmp.next(res);
          return res;
        }
      );
  }

  getTrm(updated: Date) {
    let local_trm = JSON.parse(localStorage.getItem('local_trm'));
    let trm: any;
    local_trm.forEach((tr) => {
      if (updated == tr.updated) {
        trm = tr;
      }
    });
    return trm;
  }

  getTrmToday(updated: Date) {
    return JSON.parse(localStorage.getItem('local_today_trm'));

  }

  getTrms(bitcoins: any[], bitcoin_today: any) {
    const trmApi = new TrmApi();
    let arrayTrm = [];
    let updated_today = new Date(bitcoin_today.updated);
    let upd_today = (updated_today.toISOString().substring(0, 10));

    if (bitcoins.length > 0) {
      bitcoins.forEach((bitcoin) => {
        let updated = new Date(bitcoin.updated);
        let upd = (updated.toISOString().substring(0, 10));

        trmApi
          .date(upd)
          .then((res) => {
            Object.assign(res, { updated: bitcoin.updated });
            arrayTrm.push(res);
            localStorage.setItem('local_trm', JSON.stringify(arrayTrm));
          })
          .catch((error) => { console.log("erorr") });

        trmApi
          .date(upd_today)
          .then((res) => {
            Object.assign(res, { updated: bitcoin_today.updated });
            localStorage.setItem('local_today_trm', JSON.stringify(res));
          })
          .catch((error) => { console.log("erorr") });
      });
    }
  }

}
