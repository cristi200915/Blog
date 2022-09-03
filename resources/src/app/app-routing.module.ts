import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewauthorComponent } from './authors/newauthor/newauthor.component';
import { PostsComponent } from './posts/admin/posts/posts.component';
import { NewpostComponent } from './posts/admin/newpost/newpost.component';
import { EditpostComponent } from './posts/admin/editpost/editpost.component';
import { ShowpostsComponent } from './posts/public/showposts/showposts.component';
import { PostdetailsComponent } from './posts/public/postdetails/postdetails.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'admin/authors/new',
        component: NewauthorComponent,
    },
    {
        path: 'admin/posts',
        component: PostsComponent
    },
    {
        path: 'admin/posts/new',
        component: NewpostComponent
    },
    {
        path: 'admin/posts/:id',
        component: EditpostComponent
    },
    {
        path: 'posts',
        component: ShowpostsComponent
    },
    {
        path: 'posts/:id',
        component: PostdetailsComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
