import { Injectable } from '@angular/core';
import { Entidad } from '../model/entidad';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable'


@Injectable()
export class AbstractService<T extends Entidad> {
  firestore: AngularFirestore;
  constructor(firestore: AngularFirestore) {
    this.firestore = firestore;
  }

  public create(entidad: T): void {
    this.firestore.collection(entidad.getName()).add(entidad);
  }

  public edit(entidad: T): void {
    this.firestore.collection(entidad.getName()).doc(entidad.getId()).set(entidad);
  }

  public createOrEdit(entidad: T): void {
    this.firestore.collection(entidad.getName()).add(entidad);
  }

  public remove(entidad: T): void {
    this.firestore.collection(entidad.getName()).doc(entidad.getId()).delete().then(function () {

    }).catch();
  }

  public get(nameTableDataBase: string, id: any): any {
    return this.firestore.collection(nameTableDataBase).doc(id);
  }

  public findAll(nameTableDataBase: string): Observable<any[]> {
    return this.firestore.collection(nameTableDataBase).valueChanges();
  }
}
