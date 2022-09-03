import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PostsDataSource, PostsItem } from './posts-datasource';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements AfterViewInit {
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
    @ViewChild(MatTable) table!: MatTable<PostsItem>;
    postsList = <any>[];
    /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
    displayedColumns = ['id', 'title', 'content', 'image', 'author_id', 'actions'];
    dataSource = [];
    constructor(private http: HttpClient, private _snackBar: MatSnackBar) {

    }
    ngOnInit(): void {
        this.getPostsList()
    }
    getPostsList(): void {
        this.http.get('http://127.0.0.1:8000/api/posts')
            .subscribe(
                data => {
                    const datas = PostsDataSource
                    this.dataSource = <any>data;
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
    onDeletePost(post: { id: any; }) {
        this.http.delete(`http://127.0.0.1:8000/api/posts/${post.id}`)
            .subscribe(
                data => {
                    this.getPostsList()
                    this._snackBar.open('Publicación eliminada', 'Cerrar', {
                        duration: 1500,
                        panelClass: ['error-snackbar']
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

    ngAfterViewInit(): void {

    }
}
