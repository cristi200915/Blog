import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    /** Based on the screen size, switch from standard to one column per row */
    cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
        map(({ matches }) => {
            if (matches) {
                return [
                    {
                        title: 'Administrativo',
                        cols: 1,
                        rows: 1,
                        buttons: [
                            {
                                title: "Registar autores",
                                route: "admin/authors/new"
                            },
                            {
                                title: "Administrar publicaciones",
                                route: "admin/posts/"
                            },
                        ]
                    },
                    {
                        title: 'Publico',
                        cols: 1,
                        rows: 1,
                        buttons: [
                            {
                                title: "Ver Publicaciones",
                                route: "/posts"
                            },
                        ]
                    },
                ];
            }

            return [
                {
                    title: 'Administrativo',
                    cols: 1,
                    rows: 1,
                    buttons: [
                        {
                            title: "Registar autores",
                            route: "admin/authors/new"
                        },
                        {
                            title: "Administrar publicaciones",
                            route: "admin/posts/"
                        },
                    ]
                },
                {
                    title: 'Publico',
                    cols: 1,
                    rows: 1,
                    buttons: [
                        {
                            title: "Ver Publicaciones",
                            route: "/posts"
                        },
                    ]
                },
            ];
        })
    );

    constructor(private breakpointObserver: BreakpointObserver) { }
}
