import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JualComponent } from './jual/jual.component';
import { BeliComponent } from './beli/beli.component';
import { RekapComponent } from './rekap/rekap.component';
import { RouterModule, Routes } from '@angular/router';

const routingTransaksi : Routes = [
  { path: "transaksi/beli", component: BeliComponent },
  { path: "transaksi/jual", component: JualComponent },
  { path: "transaksi/rekap", component: RekapComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingTransaksi)
  ],
  declarations: [JualComponent, BeliComponent, RekapComponent]
})
export class TransaksiModule { }
