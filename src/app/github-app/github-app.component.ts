import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';

@Component({
  selector: 'app-github-app',
  templateUrl: './github-app.component.html',
  styleUrls: ['./github-app.component.css']
})


export class GithubAppComponent implements OnInit {
  userName!: string ;
  githubService!:GithubServiceService

  searchUser(){
    this.githubService.getUserData(this.userName)
  }
  
  constructor(githubServiceService: GithubServiceService) {
    this.githubService = this.githubService
  }

  ngOnInit(): void {
  }

}
