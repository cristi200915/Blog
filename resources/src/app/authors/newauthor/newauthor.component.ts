import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-newauthor',
    templateUrl: './newauthor.component.html',
    styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent {
    authorForm = this.fb.group({
        name: [null, Validators.required],
        lastname: [null, Validators.required],
    });

    hasUnitNumber = false;

    constructor(private fb: FormBuilder, private http: HttpClient, private _snackBar: MatSnackBar) { }

    onSubmit(): void {
        this.http.post<any>('http://127.0.0.1:8000/api/authors', {
            name: this.authorForm.value.name,
            lastname: this.authorForm.value.lastname
        })
            .subscribe(
                data => {
                    this.authorForm.reset();
                    this._snackBar.open(data.status, 'Cerrar', {
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
