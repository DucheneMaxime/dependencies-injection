import { Formation } from "../formation-list/formation-list.component";

export default class FormationApi {
    fetchFormation(): Promise<Array<Formation>> {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    new Formation('Module Angular', 'ouih'),
                    new Formation('Module JavaScript', 'oih'),
                    new Formation('Module TypeScript', 'ioui'),
                ])
            }, 2000);
        });
    }
}