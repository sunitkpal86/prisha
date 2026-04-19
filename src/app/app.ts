import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Courselist } from './components/courselist/courselist';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Courselist, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prisha-academy');
}
