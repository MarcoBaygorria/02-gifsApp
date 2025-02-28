import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];

  get tagHistory() {
    return [...this._tagsHistory];
  }

  constructor() { }

  searchTag(tag: string): void {
    this._tagsHistory.unshift(tag);
  }
}
