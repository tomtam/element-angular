import { Component } from '@angular/core'
import code from './code'

@Component({
  selector: 'ex-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class ExStartComponent {
  
  private code: string[] = code
  private page: any = {
    previous: { name: '安装', link: '/guide/install' },
    next: { name: '国际化', link: '/guide/i18n' },
  }
  
}
