import { AbstractDAO } from '../../common/dao/abstractdao';
import { SegMenu } from '../model/segmenu';

export class SegMenuDAO extends AbstractDAO<SegMenu> {
    public getName(): string {
        return 'seg_menu';
    }
}
