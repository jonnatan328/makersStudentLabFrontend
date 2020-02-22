import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Student } from 'src/app/model/student';
import { environment } from "../../helper/environment";
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient
  ) { }

  agregarEstudiante(student: Student){
    return this.http.post<any>(environment.endpointBacken + '/api/saveStudent', student)
    .pipe(map(res => {
     
      return res;
    }));
  }

  obtener():Observable<Student[]>{
    console.log("Llamando el servicio");
    console.log(this.http.get<any>(environment.endpointBacken + '/api/getStudents'));
    
    return this.http.get<any>(environment.endpointBacken + '/api/getStudents')
  }
}
