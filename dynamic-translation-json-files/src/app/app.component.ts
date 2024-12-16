import { Component, Signal, ViewEncapsulation } from '@angular/core';
import { MessageService } from '@progress/kendo-angular-l10n';
import { MyMessageService } from './my-message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(private messages: MessageService) {}

  public changeLanguage(): void {
    const svc = <MyMessageService>this.messages;

    svc.language = svc.language === 'es' ? 'de' : 'es';
  }
}
