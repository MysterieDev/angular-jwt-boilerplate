import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  username: string;
  constructor(private http: HttpClient) {}
}

interface ProfileResponse {
  username: string;
}
