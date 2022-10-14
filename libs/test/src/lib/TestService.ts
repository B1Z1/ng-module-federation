import { Injectable } from '@angular/core';

@Injectable()
export class TestService {
  private text = 'Initial value';

  setText(text: string): void {
    this.text = text;
  }

  getText(): string {
    return this.text;
  }
}
