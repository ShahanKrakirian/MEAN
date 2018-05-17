import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  toAdd: any;
  errors;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.toAdd = {name: ''};
  }

  addAuthorFromService(){
    this._httpService.addAuthor(this.toAdd).subscribe(data => {
      console.log(data);
      if (data.error === "Author name must be at least 3 characters."){
        this.errors = data;
      }
      else{
        this._router.navigate(['/home']);
      }
    })
  }

}
