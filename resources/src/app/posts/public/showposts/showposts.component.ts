import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-showposts',
    templateUrl: './showposts.component.html',
    styleUrls: ['./showposts.component.css']
})
export class ShowpostsComponent implements OnInit {
    postsList = <any>[]

    constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }

    ngOnInit(): void {
        this.getPostsList()
    }
    getPostsList(): void {
        this.http.get('http://127.0.0.1:8000/api/posts')
            .subscribe(
                data => {
                    this.postsList = <any>data;
                },
                error => {
                    console.log(error);
                    this._snackBar.open(error.error.message, 'Cerrar', {
                        duration: 1500,
                        panelClass: ['error-snackbar']
                    })
                }
            )
    }

}
