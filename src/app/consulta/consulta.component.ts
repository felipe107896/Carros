import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../pessoa';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { PessoaService } from '../pessoa.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  private pessoas: Pessoa[];
  private titulo: string;

  constructor(private pessoaService: PessoaService,
    private router: Router,
    private messageService: MessageService) { }

  ngOnInit() {
     /*SETA O TÍTULO */
     this.titulo = "Registros Cadastrados";

     /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
     this.pessoaService.getPessoas().subscribe(res => {
       this.pessoas = res
     }, err => { throw err; });
  }

  /**EXCLUI UM REGISTRO QUANDO CLICAMOS NA OPÇÃO EXCLUIR DE UMA 
     * LINHA DA TABELA*/
    excluir(codigo: number, index: number) {

      if (confirm("Deseja realmente excluir esse registro?")) {
  
        /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
        this.pessoaService.excluirPessoa(codigo).subscribe(res => {
  
          let response: Response = res.body;
          if (response != null) {
            this.messageService.add({ severity: 'success', summary: 'Sucesso!', detail: 'Cadastro excluido com sucesso' });
          }
        }, err => { throw err; });
      }
  
    }
  
    editar(codigo: number): void {
      this.router.navigate(['/cadastro-pessoa', codigo]);
    }
}
