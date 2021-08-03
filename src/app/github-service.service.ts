import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from './user';
import { Repo} from './repo';
import { r3JitTypeSourceSpan } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class GithubServiceService {
    user: User
    repo: Repo
    repositoryData:any;
    newUserData:any ;
    username:any

    constructor(private Http:HttpClient) {
        this.user = new User ("", "", "", 0, new Date)
        this.repo = new Repo ("", "", new Date, "")
    }

    public getUserData(userName:string) {
        interface apiResponse {
            login:string;
            avatar_url:any;
            bio:string;
            public_repo:number;
            created_at:Date;
        };

        let promise = new Promise<void>((reject,resolve)=> {
            this.Http.get<apiResponse>(`https://api.github.com/users/abdirahman-ahmednoor?access_token?client_id= ${environment.api_key}`).toPromise().then(response =>{
                
                this.user.login = response.login,
                this.user.avatar_url = response.avatar_url,
                this.user.bio = response.bio,
                this.user.public_repo = response.public_repo,
                this.user.created_at = response.created_at

                resolve()
                
            },(error: void | PromiseLike<void>)=> {
                reject(error)
            })

            this.Http.get<any>("https://api.github.com/user/" + userName + "/repos").toPromise().then(response =>{
                for(let i =0; i < response.length; i++){
                    this.newUserData = new Repo(
                        response[i].name,
                        response[i].description,
                        response[i].updated_at,
                        response[i].language
                    )
                    this.repositoryData.push(this.newUserData)
                }
                resolve()
                
            },(error: void | PromiseLike<void>) =>{
                reject(error)
            })
        })
        return promise
    }
}
