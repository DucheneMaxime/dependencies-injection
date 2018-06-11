import { Formation } from "../formation-list/formation-list.component";
import { Injectable } from "@angular/core";
import FormationApi from "./FormationApi";

@Injectable()
export class FormationService {

    constructor(private formationApi: FormationApi){

    }

    getFormations(): Promise<Array<Formation>>{
        return this.formationApi.fetchFormation();
    }
}