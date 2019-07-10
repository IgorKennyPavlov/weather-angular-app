import { Component, Input } from '@angular/core';
import { SocialInfo } from '../mock';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent {

  @Input()
  public socialInfo: SocialInfo;

  constructor() { }
}
