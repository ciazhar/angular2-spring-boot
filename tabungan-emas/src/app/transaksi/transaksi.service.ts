import { Injectable } from '@angular/core';

@Injectable()
export class TransaksiService {

  constructor() { }

  getDaftarTransaksi(){
    let dataTransaksi = [
      {tanggal : "tanggal", keterangan : "Saldo awal",nilai : 0, saldo : 0},
      {tanggal : "tanggal", keterangan : "Tambah",nilai : 10, saldo : 10},
      {tanggal : "tanggal", keterangan : "Kurang",nilai : 5, saldo : 5},
      {tanggal : "tanggal", keterangan : "Tambah",nilai : 20, saldo : 25}
    ];
    return Promise.resolve(dataTransaksi);
  }

}
