import { Entidad } from '../model/entidad';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { Observable } from 'rxjs/Observable'

export abstract class AbstractDAO<T extends Entidad> {
    firestore: AngularFirestore;
    data: Observable<any[]>;
    constructor(firestore: AngularFirestore) {
        this.firestore = firestore;
        this.data = this.firestore.collection(this.getName()).valueChanges();
    }
    public abstract getName(): string;

    public create(entidad: T): void {
        this.firestore.collection(this.getName()).add(entidad);
    }

    public edit(entidad: T): void {
        this.firestore.collection(this.getName()).doc(entidad.getId()).set(entidad);
    }

    public createOrEdit(entidad: T): void {
        this.firestore.collection(this.getName()).add(entidad);
    }

    public remove(entidad: T): void {
        this.firestore.collection(this.getName()).doc(entidad.getId()).delete().then(function () {

        }).catch();
    }

    public get(id: any): any {
        return this.firestore.collection(this.getName()).doc(id);
    }

    public findAll(): Observable<any[]> {
        return this.data;
    }
}