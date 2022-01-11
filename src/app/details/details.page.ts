import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BitcoinsService } from '../services/bitcoins.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  bitcoins: any = [];
  bitcoin: any;
  bitcoin_today: any;
  id: string;
  page: string;
  trm: any = [];

  constructor(
    private bitcoinsService: BitcoinsService,
    private activatedRoute: ActivatedRoute
  ) {
    bitcoinsService.bitcoins.subscribe((res) => {
      this.bitcoins = res;
    });
    bitcoinsService.bitcoins_today.subscribe((res) => {
      this.bitcoin_today = res;
    })
  }

  ngOnInit() {
    this.getParams();
  }

  getParams() {
    this.activatedRoute.paramMap.subscribe(param => {
      if (!param) {
        console.log("No se encontró el parámetro");
      }
      this.id = param.get("_id");
      this.page = param.get("page");
    })
    if (this.page === "1") {
      this.trm = this.bitcoinsService.getTrm(this.bitcoin_today.updated);
    } else {
      this.bitcoin = this.getBitcoinById(this.id);
      this.trm = this.bitcoinsService.getTrm(this.bitcoin.updated);
    }

  }

  getTrm(updated: Date) {
    this.trm = this.bitcoinsService.getTrm(updated);
  }

  getBitcoinById(id: string) {
    return this.bitcoins.find(bitcoin => {
      return bitcoin.id === id
    })
  }

}
