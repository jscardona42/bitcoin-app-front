import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BitcoinsService } from '../services/bitcoins.service';
import { interval } from 'rxjs';
import { Bitcoin } from './model/bitcoin.model';

@Component({
  selector: 'app-bitcoins',
  templateUrl: './bitcoins.page.html',
  styleUrls: ['./bitcoins.page.scss'],
})
export class BitcoinsPage implements OnInit {
  bitcoins: Bitcoin[] = [];
  bitcoin_today: Bitcoin;
  trm: any = [];
  trms: any = [];
  local: any;

  constructor(
    private bitcoinsService: BitcoinsService,
    private router: Router,
  ) {
    bitcoinsService.bitcoins.subscribe((res) => {
      this.bitcoins = res;
    });
    bitcoinsService.bitcoins_today.subscribe((res) => {
      this.bitcoin_today = res;
    })
  }

  suscribe = interval(1000).pipe(
  ).subscribe(susc => {
    this.getBitcoins();
    this.getTrms(this.bitcoins, this.bitcoin_today);
    this.suscribe.unsubscribe();
    this.timer();
  });

  timer() {
    const suscribe = interval(60000).pipe(
    ).subscribe(susc => {
      this.getBitcoinToday();
      this.getTrms(this.bitcoins, this.bitcoin_today);
      var updated = new Date(this.bitcoin_today.updated);
      console.log("timer");
      if (updated.getUTCHours() >= 0 && updated.getUTCMinutes() >= 0 && updated.getUTCHours() >= 0 && updated.getUTCMinutes() <= 5) {
        this.getBitcoins();
      }
      if (updated.getUTCHours() >= 23 && updated.getUTCMinutes() >= 58) {
        suscribe.unsubscribe();
        this.timerSave();
      }
    });
  }

  timerSave() {
    const suscribe = interval(10000).pipe(
    ).subscribe(susc => {
      this.getBitcoinToday();
      console.log("timerSave");
      var updated = new Date(this.bitcoin_today.updated);
      if (updated.getUTCHours() >= 0 && updated.getUTCMinutes() >= 0 && updated.getUTCHours() <= 23 && updated.getUTCMinutes() < 58) {
        suscribe.unsubscribe();
        this.timer();
      }
    });
  }

  ngOnInit() {
    this.getBitcoins();
    this.getBitcoinToday();
  }

  getBitcoins() {
    this.bitcoinsService.getBitcoins();
  }

  getBitcoinToday() {
    this.bitcoinsService.getBitcoinToday();
  }

  viewDetails(bitcoin: any) {
    this.router.navigateByUrl('details', bitcoin);
  }

  getTrms(bitcoins: any, bitcoin_today: any) {
    this.bitcoinsService.getTrms(bitcoins, bitcoin_today);
  }

}
