import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import {HttpClientModule} from "@angular/common/http";
import { routing } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConfigService } from './config.service';
import { MessageService } from 'primeng/api';
import { PessoaService } from './pessoa.service';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    PrincipalComponent,
    ConsultaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    RouterModule,
    CalendarModule,
    InputMaskModule,
    TableModule,
    DropdownModule,
    DialogModule,
    BsDatepickerModule.forRoot()
    
  ],
  providers: [ConfigService,PessoaService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
