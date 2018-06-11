import { Formation } from "../formation-list/formation-list.component";

export class FormationService {

    getFormations(){
        let res:Array<Formation> = new Array<Formation>();
        res.push(new Formation("form1", "descr1"));
        res.push(new Formation("form2", "descr2"));
        res.push(new Formation("form3", "descr3"));
        return res;
    }
}