import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors = [];

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getAuthorsFromService()
  }

  getAuthorsFromService(){
    this.authors = [];
    this._httpService.getAuthors().subscribe(data => {
      for (var author in data) {
        this.authors.push(data[author])
      }
    })
  }

  deleteAuthorFromService(id){
    this._httpService.deleteAuthor(id).subscribe(data => {
      this.getAuthorsFromService();
    })
  }

}
