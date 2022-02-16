import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classes } from '../_models/Class';
import { Score } from '../_models/Score';
import { TokenStorageService } from './token-storage.service';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  getScoreClass(
    academicYear: string,
    semester: string,
    classes: string
  ): Observable<HttpResponse<Classes>> {
    return this.http.get<Classes>(
      `${API_URL}teacher/score/search-by?academicYear=${academicYear}&semester=${semester}&classes=${classes}`,
      {
        headers: new HttpHeaders({
          Authorization: this.tokenStorageService.getToken()!,
        }),
        responseType: 'json',
        observe: 'response',
      }
    );
  }

  getScoreSpecific(id: string): Observable<HttpResponse<Score>> {
    return this.http.get<Score>(API_URL + 'teacher/score/search/' + id, {
      headers: new HttpHeaders({
        Authorization: this.tokenStorageService.getToken()!,
      }),
      responseType: 'json',
      observe: 'response',
    });
  }

  updateScoreSpecific(id: string, nama: string, value: string) {
    return this.http.put(API_URL + 'teacher/score/update-score/' + id, {
      nama,
      value,
    });
  }
}
