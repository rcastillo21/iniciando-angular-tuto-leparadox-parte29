import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorerComponent } from './components/explorer/explorer.component';
import { UsersComponent } from './components/users/users.component';
import { UsersResolver } from './resolvers/resolver.resolver';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'explorer'
    },
    {
        path: 'explorer',
        component: ExplorerComponent
    },
    {
        path: 'users/:id',
        component: UsersComponent,
        resolve: {
            usuario: UsersResolver
        }
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}