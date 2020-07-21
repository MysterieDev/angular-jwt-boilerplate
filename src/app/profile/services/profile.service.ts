import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {
  username: string;
  constructor(private http: HttpClient) {}
}
