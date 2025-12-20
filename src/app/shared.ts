import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePicker } from 'primeng/datepicker';
import { PanelMenuModule } from 'primeng/panelmenu';
import { Toast, ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';
import { TextareaModule } from 'primeng/textarea';
import { FloatLabel } from 'primeng/floatlabel';
import { Fluid } from 'primeng/fluid';
import { FileUploadModule } from 'primeng/fileupload';

export const SHARED_IMPORTS = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  DatePicker,
  PanelMenuModule,
  ToastModule,
  ButtonModule,
  Toast,
  InputGroupModule,
  InputGroupAddonModule,
  InputTextModule,
  InputNumberModule,
  SelectModule,
  TableModule,
  TextareaModule,
  FloatLabel,
  Fluid,
  FileUploadModule,
];
