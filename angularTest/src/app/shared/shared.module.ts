import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'
import { DurationPipe } from './pipes/duration.pipe'
import { FilterPipe } from './pipes/filter.pipe'

@NgModule({
  declarations: [HeaderComponent, FooterComponent, DurationPipe, FilterPipe],
  providers: [FilterPipe],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, DurationPipe, FilterPipe],
})
export class SharedModule {}
