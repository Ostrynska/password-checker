import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { InputComponent } from "../input/input.component";
import { StatusComponent } from '../status/status.component';

@Component({
  selector: 'app-password-checker',
  standalone: true,
  templateUrl: './checker-container.component.html',
  styleUrls: ['./checker-container.component.css'],
  imports: [NgFor, InputComponent, StatusComponent]
})
export class PasswordCheckerComponent {
  password: string = '';
  status: string[] = ['gray', 'gray', 'gray'];
  message: string = '';

  onPasswordInput(password: string): void {
    this.password = password;
    this.updatePasswordStrength();
  }

  updatePasswordStrength(): void {
    if (this.password.length === 0) {
      this.setStatus(['gray', 'gray', 'gray'], '');
    } else if (this.password.length < 8) {
      this.setStatus(['red', 'red', 'red'], '❌ Password too short. It must be at least 8 characters');
    } else {
      const hasLetters = /\p{L}/u.test(this.password);
      const hasNumbers = /\p{N}/u.test(this.password);
      const hasSymbols = /[^\p{L}\p{N}]/u.test(this.password);

      if (hasLetters && hasNumbers && hasSymbols) {
        this.setStatus(['green', 'green', 'green'], '✅ Password is strong');
      } else if ((hasLetters && hasNumbers) || (hasLetters && hasSymbols) || (hasNumbers && hasSymbols)) {
        this.setStatus(['yellow', 'yellow', 'gray'], '⚠️ This password is a little secure');
      } else {
        this.setStatus(['red', 'gray', 'gray'], '⚠️ This password is a little secure');
      }
    }
  }

  private setStatus(status: string[], message: string): void {
    this.status = status;
    this.message = message;
  }
}
