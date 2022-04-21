import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
};

/**
 * Users have many properties such as `username` and `email`. They can be an "author" of a Post or a "commenter" of a Comment:
 * 
 * @param {number} id - User Id
 * name: {string} - User's full name
 * username: {string} - User's username
 * email: {string} - User's email
 * address: {Address} - User's full address and geo location
 * phone: {string} - User's phone number in format: #-###-###-#### x#####
 * website: {string} - User's web domain in format: google.com
 * company: {Company} - User's company name, catchphrase, and business system
 */
export interface User {
  id: number; // User Id
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get User by `userId`
   */
  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
  }
}
