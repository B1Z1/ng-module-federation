import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestService } from './TestService';

@NgModule({
  imports: [CommonModule],
})
export class TestModule {
  static forRoot(): ModuleWithProviders<TestModule> {
    return {
      ngModule: TestModule,
      providers: [
        TestService
      ]
    }
  }
}
