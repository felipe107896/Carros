import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ConfigService } from './config.service';
import { RequestOptions } from '@angular/http';
import { Observable, from } from 'rxjs';
import { Pessoa } from './pessoa';
import { Usuario } from './usuario';
import { Headers } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private baseUrlService: string = '';
  private headers: Headers;
  private options: RequestOptions;
  isAuthenticated = JSON.parse(sessionStorage.getItem('logado') || 'false');

  constructor(private http: HttpClient,
    private configService: ConfigService, private messageService: MessageService,
    private router: Router) { 
       /**SETANDO A URL DO SERVIÇO REST QUE VAI SER ACESSADO */
    this.baseUrlService = configService.getUrlService() + '/pessoa/';

    /*ADICIONANDO O JSON NO HEADER */
    this.headers = new Headers({ 'Content-Type': 'application/json;charset=UTF-8' });
    this.options = new RequestOptions({ headers: this.headers });
    }

    /**CONSULTA TODAS AS PESSOAS CADASTRADAS */
  getPessoas(): Observable<Pessoa[]> {
    return this.http.get<Pessoa[]>(this.baseUrlService);
  }
  
  /**ADICIONA UMA NOVA PESSOA */
  addPessoa(pessoa: Pessoa): Observable<HttpResponse<Response>> {
    return this.http.post<Response>(this.baseUrlService, JSON.stringify(pessoa), { observe: 'response' });
  }
  /**EXCLUI UMA PESSOA */
  excluirPessoa(codigo: number): Observable<HttpResponse<Response>> {
    return this.http.delete<Response>(this.baseUrlService + codigo, { observe: 'response' });
  }

  /**CONSULTA UMA PESSOA PELO CÓDIGO */
  getPessoa(codigo: number): Observable<Pessoa> {
    return this.http.get<Pessoa>(this.baseUrlService + codigo);
  }

  /**ATUALIZA INFORMAÇÕES DA PESSOA */
  atualizarPessoa(pessoa: Pessoa): Observable<HttpResponse<Response>> {
    return this.http.put<Response>(this.baseUrlService, JSON.stringify(pessoa), { observe: 'response' });
  }

  login(usuario: Usuario){
      if(usuario.login === "felipe" && usuario.senha === "123"){
        this.isAuthenticated = true;
        sessionStorage.setItem('logado', JSON.stringify(usuario));
        this.router.navigate(['/cadastro-pessoa']);
      } else if (this.http.get<Response>(this.baseUrlService + usuario.login + usuario.senha , {observe: 'response'})){
        this.isAuthenticated = true;
        sessionStorage.setItem('logado', JSON.stringify(usuario));
        this.router.navigate(['/cadastro-pessoa']);

      }
      else{
        const msg = 'Falha de Autenticação';
        console.log('erro autenticacao');
        this.messageService.add({severity: 'warn', summary: 'Atenção!', detail: 'Erro de autenticação'});
        console.log(msg);
        return msg;
      }
  }
}
