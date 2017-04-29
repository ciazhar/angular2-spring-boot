import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JualComponent } from './jual/jual.component';
import { BeliComponent } from './beli/beli.component';
import { RekapComponent } from './rekap/rekap.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JualComponent, BeliComponent, RekapComponent]
})
export class TransaksiModule { }
