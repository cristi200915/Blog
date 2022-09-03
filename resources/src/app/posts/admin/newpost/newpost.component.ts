import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-newpost',
    templateUrl: './newpost.component.html',
    styleUrls: ['./newpost.component.css']
})
export class NewpostComponent {
    postForm = this.fb.group({
        title: [null, Validators.required],
        content: [null, Validators.required],
        image: [null, Validators.required],
        author_id: [null, Validators.required],
    });
    authorsList = <any>[];

    constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar) { }
    ngOnInit(): void {
        this.getAuthorsList()
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
    onSubmit(): void {
        //FormData setup
        const file_form = <any>this.postForm.value.image;
        const file = <any>file_form.files[0];
        const formData = new FormData();
        formData.append('title', <any>this.postForm.value.title);
        formData.append('content', <any>this.postForm.value.content);
        formData.append('image', file);
        formData.append('author_id', <any>this.postForm.value.author_id);
        this.http.post('http://127.0.0.1:8000/api/posts', formData)
            .subscribe(
                data => {
                    this.postForm.reset();
                    this._snackBar.open('Publicación creada', 'Cerrar', {
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
