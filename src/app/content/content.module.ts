import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { ContentProfileComponent } from './content-profile/content-profile.component';
import { ContentHomeComponent } from './content-home/content-home.component';
import { routing } from './content-routing.module';

@NgModule({
  imports:      [ routing ],
  declarations: [ContentComponent, ContentProfileComponent, ContentHomeComponent],
})
export class ContentModule { }