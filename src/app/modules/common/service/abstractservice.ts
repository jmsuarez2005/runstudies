import { AbstractDAO } from '../dao/abstractdao';
import { Entidad } from '../model/entidad';
import { Observable } from 'rxjs/Observable'


export abstract class AbstractService<T extends Entidad> {


  constructor() {
  }

  public abstract getAbstractDAO(): AbstractDAO<T>;

  public create(entidad: T): void {
    this.getAbstractDAO().create(entidad);
  }

  public edit(entidad: T): void {
    this.getAbstractDAO().edit(entidad);
  }

  public createOrEdit(entidad: T): void {
    this.getAbstractDAO().createOrEdit(entidad);
  }

  public remove(entidad: T): void {
    this.getAbstractDAO().remove(entidad);
  }

  public get(id: any): any {
    return this.getAbstractDAO().get(id);
  }

  public findAll(): Observable<any[]> {
    return this.getAbstractDAO().findAll();
  }
}
