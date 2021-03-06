import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

/*COMPONENTES DE LA PAGINA PRINCIPAL */
import {IndexComponent} from './index.component';
import {ActivityIndexComponent} from './activity.component';
//import {InstallationIndexComponent} from './installation.component';

import {ClientComponent} from './client.component';

import {UserFormComponent} from './user-form.component';

/*SERVICES DE LA PAGINA PRINCIPAL */
import {UserService} from './user.service';
import {ActivityService} from './activity.service';
import {InstallationService} from './installation.service';
import {TarifaService} from './tarifa.service';
import {GalleryService} from './gallery.service';

/*COMPONENTES DE LA CARPETA ADMIN */
import {AdminComponent} from './Admin/admin.component';
import {SharedClassesComponent} from './admin/sharedClasses.component';
import {SharedClassesDetailComponent} from './admin/sharedClasses-detail.component';
import {ShopComponent} from './admin/shop.component';
import {InstallationComponent} from './admin/installation.component';
import {InstallationDetailComponent} from './admin/installation-detail.component';

import {ActivityComponent} from './admin/activity.component';
import {ActivityDetailComponent} from './admin/activity-detail.component';

import {TarifaComponent} from './admin/tarifa.component';
import {TarifaDetailComponent} from './admin/tarifa-detail.component';

import {GalleryComponent} from './admin/gallery.component';
import {GalleryDetailComponent} from './admin/gallery-detail.component';

/*SERVICES DE LA PAGINA DEL ADMIN */
import {SharedService} from './admin/sharedClasses.service';
import {ProductService} from './product.service';


@Component({

    selector: 'app' ,
    template: '<router-outlet></router-outlet>',
    providers: [UserService,ActivityService,InstallationService,TarifaService,GalleryService,ProductService,SharedService],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([

    {path: '/index',    name:'Index',   component: IndexComponent, useAsDefault:true},

    {path: '/client',   name:'Client',  component: ClientComponent},

    {path: '/user/new', name:'UserNew', component: UserFormComponent},

    /*NAVEGACION POR LA PAGINA DEL ADMIN*/
    {path: '/admin',                name:'Admin',              component: AdminComponent},
    
    {path: '/admin/shared-classes', name:'AdminSharedClasses', component: SharedClassesComponent},
    {path: '/admin/shared-classes/:id',name: 'SharedClassesDetail',    component:SharedClassesDetailComponent},
    
    {path: '/admin/shop',           name:'AdminShop',          component: ShopComponent},

    {path: '/admin/installation',   name:'AdminInstallations',  component: InstallationComponent},
    {path: '/admin/installation/:id',   name: 'InstallationDetail',    component:InstallationDetailComponent},

    {path: '/admin/activities',     name:'AdminActivities',    component: ActivityComponent},
    {path: '/admin/activity/:id',   name: 'ActivityDetail',    component: ActivityDetailComponent},

    {path: '/admin/tarifas',        name:'AdminTarifas',       component: TarifaComponent},
    {path: '/admin/tarifa/:id',     name: 'TarifaDetail',      component: TarifaDetailComponent},

    {path: '/admin/galeria',        name:'AdminGallery',       component: GalleryComponent},
    {path: '/admin/galeria/:id',    name:'GalleryDetail',      component: GalleryDetailComponent},

])

export class AppComponent { }
