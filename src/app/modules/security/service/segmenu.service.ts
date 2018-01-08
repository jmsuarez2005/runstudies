import { Injectable } from '@angular/core';
import { AbstractService } from '../../common/service/abstractservice';
import { SegMenuDAO } from '../dao/segmenudao';
import { AbstractDAO } from '../../common/dao/abstractdao';

import { SegMenu } from '../model/segmenu';


@Injectable()
export class SegMenuService extends AbstractService<SegMenu> {

  constructor() {
    super();
  }

  segUsuarioDAO = new SegMenuDAO(null);

  public getAbstractDAO(): AbstractDAO<SegMenu> {
    return this.segUsuarioDAO;
  }

}