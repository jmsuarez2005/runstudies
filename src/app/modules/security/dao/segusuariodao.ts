import { AbstractDAO } from "../../common/dao/abstractdao";
import { SegUsuario } from "../model/segusuario";

export class SegUsuarioDAO extends AbstractDAO<SegUsuario> {
    public getName(): string{
        return 'seg_usuario';
    }
}
