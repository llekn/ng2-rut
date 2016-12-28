import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RutPipe } from './src/rut.pipe';
import { RutService } from './src/rut.service';
import { validateRutFactory, RutValidator } from './src/rut.validator';
import { RutDirective } from './src/rut.directive';
import { RutValueAccessor } from './src/rut-value-accessor';

@NgModule({
  imports: [
    FormsModule,
  ],
  declarations: [
    RutPipe,
    RutDirective,
    RutValidator,
    RutValueAccessor,
  ],
  providers: [
    RutService,
    RutValidator
  ],
  exports: [
    RutPipe,
    RutDirective,
    RutValidator,
    RutValueAccessor
  ],
})
export class Ng2Rut {}

export * from './src/rut.pipe';
export * from './src/rut.service';
export * from './src/rut.validator';
export * from './src/rut.directive';
