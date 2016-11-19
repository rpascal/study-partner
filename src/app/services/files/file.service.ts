import { Injectable, OnDestroy } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseAuth, FirebaseAuthState } from 'angularfire2';
import {FirebaseService} from '../firebase/firebase.service';

export class FilesModel {
    $key: string;
    $exists: () => {};
    url : string;

}


@Injectable()
export class FilesService {

    public entities: FilesModel[];

    private _authState: FirebaseAuthState;
    
    constructor(private _af: AngularFire,public fb: FirebaseService) {
        _af.auth.subscribe(authState => {
            this._authState = authState;
            if (authState) {
                _af.database.list('/Files').subscribe(files => {
                    this.entities = files;
                });
            }
        });
    }


    public getFiles() :  FilesModel[] {
        return this.entities;
    }

    public add(url : string) : string {
        let push ={
            url : url
        }


        // let key = 'hs';

        // let temp : {} =[];
        // temp[key] = true;
        // classservie.update('classekey', temp);

        return this.fb.pushWithKey('Files',push).key;
    }


}