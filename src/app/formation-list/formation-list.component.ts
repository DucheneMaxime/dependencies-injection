import { Component, OnInit } from '@angular/core';
import { FormationService } from '../services/FormationService';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
  private _formations : Array<Formation>;

  constructor(private formationService: FormationService) { }

  public get formations() : Array<Formation> {
    return this._formations;
  }
  public set formations(v : Array<Formation>) {
    this._formations = v;
  }
  
  ngOnInit() {
    this.formations = this.formationService.getFormations();
  }

}

export class Formation {
  
  private _nom : string;
  private _description : string;

  constructor(nom, description){
    this._nom =nom;
    this._description = description;
  }

  public get description() : string {
    return this._description;
  }

  public set description(v : string) {
    this._description = v;
  }
  
  public get nom() : string {
    return this._nom;
  }

  public set nom(v : string) {
    this._nom = v;
  }
  
}
