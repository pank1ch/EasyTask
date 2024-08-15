import { Component, output } from "@angular/core";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {

  message: string = 'Суета наступила';

  select = output<string>();


  onHeaderClick(){

    this.select.emit(this.message);
  }

}
