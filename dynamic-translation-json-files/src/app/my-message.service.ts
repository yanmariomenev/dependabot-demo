import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from '@progress/kendo-angular-l10n';

@Injectable()
export class MyMessageService extends MessageService {
  private localeId = 'es';
  private messagesData: { [key: string]: string } = {};

  constructor(private http: HttpClient) {
    super();
    // Load the default language on initialization
    this.loadLanguage(this.localeId);
  }

  public set language(value: string) {
    if (value !== this.localeId) {
      this.localeId = value;
      this.loadLanguage(value);
    }
  }

  public get language(): string {
    return this.localeId;
  }

  private loadLanguage(language: string): void {
    const filePath = `assets/${language}.json`; // Adjusted for root-level JSON files
    this.http
      .get<{ rtl: boolean; messages: { [key: string]: string } }>(filePath)
      .subscribe(
        (langData) => {
          console.log(`Loaded JSON for language "${language}":`, langData); // Log the loaded data
          this.messagesData = langData.messages;
          this.notify(langData.rtl);
        },
        (error) => {
          console.error(`Error loading language file: ${filePath}`, error); // Log errors
        }
      );
  }

  public override get(key: string): string {
    return this.messagesData[key] || key; // Fallback to the key if translation is missing
  }
}
