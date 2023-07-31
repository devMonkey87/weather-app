import { Component } from '@angular/core';
import { EnvironmentService } from './shared/services/environment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-app';

  //FIXME: remove this useless use of EnvironmentService and following console.log()
  constructor(environmentService: EnvironmentService) {
    console.log(
      'EJEMPLO DE VARIABLE ENTORNO' +
        environmentService.getEnvironmentProperty(
          environmentService.enumTypes.API_URL
        )
    );
  }
}
