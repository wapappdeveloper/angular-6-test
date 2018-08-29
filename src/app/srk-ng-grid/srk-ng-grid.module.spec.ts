import { SrkNgGridModule } from './srk-ng-grid.module';

describe('SrkNgGridModule', () => {
  let srkNgGridModule: SrkNgGridModule;

  beforeEach(() => {
    srkNgGridModule = new SrkNgGridModule();
  });

  it('should create an instance', () => {
    expect(srkNgGridModule).toBeTruthy();
  });
});
