import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-editpost',
    templateUrl: './editpost.component.html',
    styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
    postForm = this.fb.group({
        title: [null, Validators.required],
        content: [null, Validators.required],
        image: [null, Validators.required],
        author_id: [null, Validators.required],
    });
    authorsList = <any>[];
    id = <any>Number;
    private sub = <any>undefined;


    constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar, private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.getUrlParams()
        this.getAuthorsList()
        this.getPostDetails()
    }
    getUrlParams(): void {
        this.sub = this.route.params.subscribe(params => {
            this.id = +params['id'];
        });
    }
    getAuthorsList(): void {
        this.http.get('http://127.0.0.1:8000/api/authors')
            .subscribe(
                data => {
                    this.authorsList = <any>data;
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
    getPostDetails(): void {
        this.http.get('http://127.0.0.1:8000/api/posts/' + this.id)
            .subscribe(
                data => {
                    const post = <any>data;
                    this.postForm.get('title')?.patchValue(post.title)
                    this.postForm.get('content')?.patchValue(post.content)
                    this.postForm.get('image')?.patchValue(post.image)
                    this.postForm.get('author_id')?.patchValue(post.author_id)
                },
                error => {
                    this._snackBar.open(error.error.message, 'Cerrar', {
                        duration: 1500,
                        panelClass: ['error-snackbar']
                    })
                }
            )
    }
    onSubmit(): void {
        this.http.patch('http://127.0.0.1:8000/api/posts/' + this.id, {
            title: this.postForm.value.title,
            content: this.postForm.value.content,
            author_id: this.postForm.value.author_id,
        })
            .subscribe(
                data => {
                    this.postForm.reset();
                    this._snackBar.open('Publicación modificada', 'Cerrar', {
                        duration: 1500
                    })
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
