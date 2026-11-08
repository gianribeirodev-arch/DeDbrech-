import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface FormularioContato {
  nome: string;
  email: string;
  mensagem: string;
}

@Component({
  selector: 'app-contato',
  imports: [FormsModule],
  templateUrl: './contato.html',
  styleUrl: './contato.scss',
})
export class Contato {
  readonly form: FormularioContato = { nome: '', email: '', mensagem: '' };
  readonly enviado = signal(false);

  enviar(): void {
    this.enviado.set(true);
    this.form.nome = '';
    this.form.email = '';
    this.form.mensagem = '';
  }
}
