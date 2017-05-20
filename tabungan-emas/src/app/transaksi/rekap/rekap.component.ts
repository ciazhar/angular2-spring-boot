import { Component, OnInit } from '@angular/core';
import { TransaksiService } from '../transaksi.service';

@Component({
  selector: 'app-rekap',
  templateUrl: './rekap.component.html',
  styleUrls: ['./rekap.component.css']
})
export class RekapComponent implements OnInit {

  dataTransaksi = [];

  constructor(private transaksiService : TransaksiService){  }

  ngOnInit(){
    this.transaksiService.getDaftarTransaksi().then(hasil => this.dataTransaksi = hasil)
  }

}
