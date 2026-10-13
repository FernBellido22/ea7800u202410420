import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {LayoutComponent} from './shared/presentation/components/layout/layout';

@Component({
  selector: 'app-root',
  imports: [LayoutComponent],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  styleUrl: './app.css'
})
/**
 * Root component hosting the shared layout shell.
 */
export class App {
  /** Application title signal used by templates and tests. */
  protected readonly title = signal('');
}
