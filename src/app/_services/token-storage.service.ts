import { Injectable } from '@angular/core';

const TOKEN_KEY = 'Authorization';
const USER_KEY = 'auth-user';
const SCORE_KEY = 'score-key';
const CLASS_KEY = 'class-key';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  public saveScoreUser(id: string, nama: string): void {
    localStorage.setItem(SCORE_KEY, JSON.stringify({ id, nama }));
  }

  public getScoreUser(): string | null {
    return localStorage.getItem(SCORE_KEY);
  }

  public deleteScoreUser(): void {
    localStorage.removeItem(SCORE_KEY);
  }

  public saveToken(token: string): void {
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  public deleteToken(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }

  public saveUser(user: any): void {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getClassTeacher(): string | null {
    return localStorage.getItem(CLASS_KEY);
  }

  public getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
