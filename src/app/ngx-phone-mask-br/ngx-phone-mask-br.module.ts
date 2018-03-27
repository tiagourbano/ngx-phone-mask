import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPhoneMaskBrDirective } from './ngx-phone-mask-br.directive';

@NgModule({
  	imports: [
		CommonModule
	],
	declarations: [NgxPhoneMaskBrDirective],
	exports: [NgxPhoneMaskBrDirective]
})
export class NgxPhoneMaskBrModule { }
