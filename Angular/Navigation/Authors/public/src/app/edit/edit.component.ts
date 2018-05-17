import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  toUpdate: any;
  errors = '';

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this._httpService.getAuthor(params['id']).subscribe(data => {
        this.toUpdate = {_id: params['id'], name: data.name};
      })
    })
  }

  updateAuthorFromService(){
    if (this.toUpdate.name.length < 3){
      this.errors = "Author name must be at least 3 characters.";
    }
    else{
      this._httpService.updateAuthor(this.toUpdate).subscribe(data => {
        this._router.navigate(['/home']);
      })
    }
  }


  }

  

}
