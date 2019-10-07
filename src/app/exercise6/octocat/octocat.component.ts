import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-octocat',
  templateUrl: './octocat.component.html',
  styleUrls: ['./octocat.component.scss'],
})
export class OctocatComponent implements OnInit {

  /**
   * Este ejercicio lo he hecho un poco distinto, usando Observables para refrescar los atributos del pulpogato,
   * y complicando la lógica del mismo para hacer una especie de juego.
   * NOTA: NO FUNCIONA EN MÓVIL, YA QUE USA EL MOUSEOVER Y MOUSEOUT. LOS EVENTOS DE TOUCH NO FUNCIONAN COMO SE ESPERABAN, AL MENOS
   * EN NAVEGADOR.
   */

  // Lifecycle Update
  private ngOnUpdate: Observable<any>;
  private subscription: Subscription;

  private position: number;
  private acceleration: number;

  // Get element reflection
  nativeElement = this.hostElement.nativeElement as HTMLElement;

  // Get element renderer for safe manipulation
  renderedElement = this.elementRenderer.selectRootElement(this.nativeElement);

  constructor(
    private hostElement: ElementRef,
    private elementRenderer: Renderer2
  ) { }

  ngOnInit() {
    this.position = 0;
    this.acceleration = 0;
    this.ngOnUpdate = interval(1);
  }

  onMouseOver() {
    this.subscription = this.ngOnUpdate.subscribe(() => {
      this.acceleration = this.clamp(this.acceleration + .001, 0, 2);
      this.position += this.acceleration;

      this.renderedElement.setAttribute('style', 'left:' + this.position + 'px; position: absolute;');

      if (this.position > window.innerWidth - 10) {
        alert('Lo lograste!');
        this.subscription.unsubscribe();
      }
    });
  }
  onMouseOut() {
    if (this.position < window.innerWidth) {
      this.position = 0;
      this.acceleration = 0;
      this.renderedElement.setAttribute('style', 'left:' + this.position + 'px; position: absolute;');
      alert('El pulpogato no consiguió llegar a la meta');
    }
    this.subscription.unsubscribe();
  }

  private clamp(n, min, max) {
    return Math.max(min, Math.min(n, max));
  }
}
