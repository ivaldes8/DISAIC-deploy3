import { Component, OnInit, OnDestroy } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { faCoffee, faBars,faSpinner, faWrench } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth/auth.service';
import { Subscription } from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: true, autoClose: true } }]
})
export class AppComponent implements OnInit, OnDestroy {
  isCollapsed = true;
  faBars = faBars;
  faSpinner = faWrench;
  isAuthenticated = false;

  private userSub: Subscription;

  constructor(private authService: AuthService, private translate: TranslateService){}

  ngOnInit(){
    this.authService.autoLogin();
   this.userSub = this.authService.user.subscribe(
     user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
     }
   );

  this.translate.setDefaultLang('es');

  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onLogout(){
    this.authService.logout();
  }

  useLanguage(event:any){
      const language = event.target.value;

      if(language == "espanol"){
        this.translate.use('es');
      }

      if(language == "ingles"){
        this.translate.use('en');
      }

      if(language == "frances"){
        this.translate.use('fr');
      }
  }
}
