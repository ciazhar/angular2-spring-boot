import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JualComponent } from './jual/jual.component';
import { BeliComponent } from './beli/beli.component';
import { RekapComponent } from './rekap/rekap.component';
import { RouterModule, Routes } from '@angular/router';
import { TransaksiService } from './transaksi.service';
import { AuthGuard } from '../shared/authguard';

const routingTransaksi : Routes = [
  { path: "transaksi/beli", component: BeliComponent, canActivate : [AuthGuard] },
  { path: "transaksi/jual", component: JualComponent, canActivate : [AuthGuard] },
  { path: "transaksi/rekap", component: RekapComponent }
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routingTransaksi)
  ],
  declarations: [JualComponent, BeliComponent, RekapComponent],
  providers :[
    TransaksiService, AuthGuard
  ]

})
export class TransaksiModule { }
