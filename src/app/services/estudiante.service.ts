import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Estudiante } from '../models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  constructor(private fireStore: AngularFirestore) { }

  createStudent(student: Estudiante){
    return this.fireStore.collection('estudiante').add(student);
  }
}
