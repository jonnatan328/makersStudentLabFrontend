import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from 'src/app/model/student';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: Student[];
  student: Student;
  saveStudentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private studentService:StudentService,
  ) { 
    this.studentService.obtener().subscribe(res => {
        this.students = res['body'];
      }
    );
  }

  ngOnInit() {
    this.saveStudentForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required]
    })
  }

  get saveStudentFromCtrl(){
    return this.saveStudentForm.controls;
  }

  onSubmit(){
    console.log("Agregando Estudiante");
    
    if (this.saveStudentForm.invalid) {
      return;
    }

    this.student = {firstname: this.saveStudentFromCtrl.firstname.value, 
      lastname: this.saveStudentFromCtrl.lastname.value, 
      email: this.saveStudentFromCtrl.email.value}

    this.studentService.agregarEstudiante(this.student).subscribe( data => {
      console.log(data);
      
      this.students.push(data['body'])
    },
    error => {
      console.log("Error al agregar: ", error);
    });
  }
}
