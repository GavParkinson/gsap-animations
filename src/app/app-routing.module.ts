import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FadeComponent } from './fade/fade.component';
import { ParallaxComponent } from './parallax/parallax.component';
import { SlideComponent } from './slide/slide.component';

const routes: Routes = [
  {
    path: 'slide',
    component: SlideComponent
  },
  {
    path: 'fade',
    component: FadeComponent
  },
  {
    path: '',
    component: ParallaxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
