import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-postdetails',
    templateUrl: './postdetails.component.html',
    styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {
    id = <any>Number;
    private sub = <any>undefined;
    post = <any>Object;
    constructor(private http: HttpClient, private _snackBar: MatSnackBar, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getUrlParams()
        this.getPostDetails()
    }
    getUrlParams(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }
    getPostDetails(): void {
        this.http.get('http://127.0.0.1:8000/api/posts/' + this.id)
            .subscribe(
                data => {
                    this.post = data
                },
                error => {
                    this._snackBar.open(error.error.message, 'Cerrar', {
                        duration: 1500,
                        panelClass: ['error-snackbar']
                    })
                }
            )
    }
}
