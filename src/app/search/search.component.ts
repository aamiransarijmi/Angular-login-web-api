import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';


@Component({
    selector: 'App-search-component',
    templateUrl: './search.component.html'
})

export class SearchComponent {
    public instructors = [];
    searchTerm = '';

    constructor(
        private _UserServiceService: UserServiceService
    ) {
        debugger
        this.instructors = this._UserServiceService.getList(this.searchTerm)

    }
    update() {
        this.instructors = this._UserServiceService.getList(this.searchTerm);
    }


}