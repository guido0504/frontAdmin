import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Toast, ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';

export const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  DatePickerModule,
  PanelMenuModule,
  ToastModule,
  ButtonModule,
  Toast,
];
