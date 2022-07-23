import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss'],
})
export class ImageViewerComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}
  @Input() base64Image: string = '';

  //TODO: add buttons for selecting or cancel picture displayed. If selected, output the selected button and mark the checkbox in table component

  ngOnInit(): void {}

  transform() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64,${this.base64Image}`);
  }
}
