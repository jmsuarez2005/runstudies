import { Injectable } from '@angular/core';
import { AbstractService } from '../../common/service/abstractservice';
import { SegUsuarioDAO } from '../dao/segusuariodao';
import { AbstractDAO } from '../../common/dao/abstractdao';

import { SegUsuario } from '../model/segusuario';


@Injectable()
export class SegUsuarioService extends AbstractService<SegUsuario> {

  constructor() {
    super();
  }

  segUsuarioDAO = new SegUsuarioDAO(null);

  public getAbstractDAO(): AbstractDAO<SegUsuario> {
    return this.segUsuarioDAO;
  }

}
