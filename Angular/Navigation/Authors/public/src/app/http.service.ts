import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }

  addAuthor(name){
    return this._http.post('/api/authors/new', name);
  }

  getAuthors(){
    return this._http.get('/api/authors');
  }

  deleteAuthor(id){
    return this._http.delete('/api/author/delete/' + id);
  }

  updateAuthor(author){
    return this._http.put('/api/authors/update/'+author._id, author);
  }

  getAuthor(author_id){
    return this._http.get('/api/authors/' + author_id);
  }

}
