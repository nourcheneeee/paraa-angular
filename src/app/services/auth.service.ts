import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAdmin = false;

  login(email: string, password: string): boolean {
    if (email === 'admin@admin.com' && password === '123') {
      this.isAdmin = true;
      return true;
    }
    return false;
  }

  getAdminStatus(): boolean {
    return this.isAdmin;
  }
}
