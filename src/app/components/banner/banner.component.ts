import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements AfterViewInit {

  title = 'Igor  Nascimento';
  splitedTitle = this.title.split('');

  fonts = [
    'butterfly',
    'caesarDressing',
    'cairoVariable',
    'chelseaMarket',
    'comingSoon',
    'constantine',
    'craftyGirls',
    'frederickat',
    'goudy',
    'homespun',
    'medusa',
    'miniver',
    'mountains',
    'praetoria',
    'princessSofia',
  ]

  ngAfterViewInit(): void {
    this.rerender();
  }

  rerender() {
    setInterval(() => {
      this.title = 'Igor Nascimento';
    }, 1500);
  }

  getFont() {
    return 'font-family: ' + this.fonts[Math.floor(Math.random() * this.fonts.length)];;
  }

}
