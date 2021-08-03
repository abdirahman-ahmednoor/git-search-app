import { Component, OnInit } from '@angular/core';
import { GithubServiceService } from '../github-service.service';
import { User } from '../user';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  user: User | any
  repoDetail:any=[]
  githubService: GithubServiceService;
  username:any

  constructor(githubService:GithubServiceService) {
    this.githubService = githubService
  }

  ngOnInit(): void {
    this.user = this.githubService.user,
    this.repoDetail = this.githubService.repositoryData
  }

}
