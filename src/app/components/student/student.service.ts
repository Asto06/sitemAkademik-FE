import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { studentGetData } from 'src/app/interface/IStudent';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL + 'api/';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  getStudentData(_id: string): Observable<HttpResponse<studentGetData>> {
    return this.http.get<studentGetData>(`${API_URL}student/${_id}`, {
      headers: new HttpHeaders({
        Authorization: this.tokenStorageService.getToken()!,
      }),
      responseType: 'json',
      observe: 'response',
    });
  }
}
