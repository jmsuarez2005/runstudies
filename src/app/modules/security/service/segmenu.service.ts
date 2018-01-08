import { Injectable } from '@angular/core';

@Injectable()
export class SegMenuService extends AbstractService<SegUsuario>{
  
    constructor() { 
      super();
    }
  
    segUsuarioDAO = new SegUsuarioDAO(null);
    
    public getAbstractDAO(): AbstractDAO<SegUsuario> {
        return this.segUsuarioDAO;
    }
  
  }