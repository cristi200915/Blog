import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
//App Modules
import { DashboardComponent } from './dashboard/dashboard.component';

//Material Modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AuthorComponent } from './authors/author/author.component';
import { NewauthorComponent } from './authors/newauthor/newauthor.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/admin/posts/posts.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { NewpostComponent } from './posts/admin/newpost/newpost.component';
//Mat Input File
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { EditpostComponent } from './posts/admin/editpost/editpost.component';
import { ShowpostsComponent } from './posts/public/showposts/showposts.component';
import { PostdetailsComponent } from './posts/public/postdetails/postdetails.component';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        AuthorComponent,
        NewauthorComponent,
        PostsComponent,
        NewpostComponent,
        EditpostComponent,
        ShowpostsComponent,
        PostdetailsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatListModule,
        MatButtonModule,
        LayoutModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MaterialFileInputModule,
    ],
    exports: [],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
