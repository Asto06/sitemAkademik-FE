import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClassData } from '../interface/IClass';
import { CourseData } from '../interface/ICourse';
import { TeacherData } from '../interface/ITeacher';
import { TokenStorageService } from './token-storage.service';

const API_URL = environment.API_URL + 'api/';
@Injectable({
  providedIn: 'root',
})
export class ClassesService {
  constructor(
    private http: HttpClient,
    private tokenStorageService: TokenStorageService
  ) {}

  getclass(id: string): Observable<HttpResponse<ClassData>> {
    return this.http.get<ClassData>(`${API_URL}teacher/class/${id}`, {
      headers: new HttpHeaders({
        Authorization: this.tokenStorageService.getToken()!,
      }),
      responseType: 'json',
      observe: 'response',
    });
  }

  getCourse(id: string): Observable<HttpResponse<CourseData>> {
    return this.http.get<CourseData>(`${API_URL}teacher/course/${id}`, {
      headers: new HttpHeaders({
        Authorization: this.tokenStorageService.getToken()!,
      }),
      responseType: 'json',
      observe: 'response',
    });
  }
}
