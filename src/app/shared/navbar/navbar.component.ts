import { Component } from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import Speech from 'speak-tts';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [AuthService]
})
export class NavbarComponent{
  title = 'tts';
  speech:any;

  public user$: Observable <any> = this.authS.afAuth.user;
  constructor(private authS: AuthService, private router: Router) {
    this.speech = new Speech();
    if(this.speech.hasBrowserSupport()){
      console.log("the browser supports speech synthesis");
      this.speech.init({
        'volume': 1,
        'lang': 'es-ES',
        'rate': .75,
        'pitch': 1,
        'voice':'Google español',
        'splitSentences': true,
        'listeners': {
            'onvoiceschanged': (voices) => {
                console.log("Available Voices", voices)
            }
        }
      })
    }

   }
  async onLogout()
  {
    try {
      await this.authS.logout();
      this.router.navigate(['login']);
    }catch (e) {
      console.log(e);
    }
  }
  start() {
    this.speech.speak({
      text: 'Auto maga.  Nosotros. Preguntas Frecuentes. contacto. login. registrer. phone login ', //El texto que quieras escuchar va aqui
    }).then(() => {
      console.log("Success")
    }).catch(e => {
      console.error("An error occured while initializing :", e) 
    })
  }

  pause(){
    this.speech.pause();
  }
}
