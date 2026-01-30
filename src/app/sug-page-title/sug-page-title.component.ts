import { Component, Input } from '@angular/core';
import { HeadingTags } from '../model/heading-tag-types';
import { NgIf, NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'sug-page-title',
  imports: [NgSwitch, NgSwitchCase, NgIf],
  templateUrl: './sug-page-title.component.html',
  styleUrl: './sug-page-title.component.css',
})
export class SugPageTitleComponent {
  @Input({ required: true })
  title!: string;

  @Input()
  subtitle?: string;

  @Input()
  titleTag?: HeadingTags = 'h3';
}
