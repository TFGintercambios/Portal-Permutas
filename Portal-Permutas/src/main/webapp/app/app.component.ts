import {Component, ViewEncapsulation, ElementRef} from '@angular/core';
import { User } from './_models/index';
import {Router} from '@angular/router';

import { AuthenticationService } from './_services/index';
import { PropuestaService} from './_services/index';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  encapsulation: ViewEncapsulation.None,
})

export class AppComponent { 
 
    private isDarkTheme = false;
    
    
    NotLoggedNavItems = [
    {name: 'Home', route: ''},
    {name: 'List', route: 'list'},
    {name: 'Login', route: 'login'},
    {name: 'Register', route: 'register'}
  ];
  
    LoggedNavItems = [
    {name: 'Home', route: ''},
    {name: 'List', route: 'list'},
    {name: 'Zonas Deseadas', route: 'zonas'},
    {name: 'Editar Perfil', route: 'editaUsuario'},
    {name: 'Editar Plaza', route: 'editaPlaza'},
    {name: 'Propuestas Enviadas', route: 'propuestasEnviadas'},
    {name: 'Propuestas Recibidas', route: 'propuestasRecibidas'}
  ];
    
    constructor(private authenticationService: AuthenticationService, private router: Router, private _element: ElementRef, private propuestaService: PropuestaService) {
    }
    
    toggleTheme() {
    	this.isDarkTheme = !this.isDarkTheme;
  	}	
    
    logout() {
        this.router.navigate(['/j_spring_security_logout']);
        this.authenticationService.changeLoginStatus(false);
        this.authenticationService.setCurrentUser(null);
    }
    
    goToLogin(){
    	this.router.navigate(['/login']);
    }
    
    goToRegister(){
    	this.router.navigate(['/register']);
    }
    
    goToHome(){
    	this.router.navigate(['/']);
    }
    
    goToEditarUsuario(){
    	this.router.navigate(['/editaUsuario']);
    }
    
    goToRecibidas(){
    	this.router.navigate(['/propuestasRecibidas']);
    }
    
}