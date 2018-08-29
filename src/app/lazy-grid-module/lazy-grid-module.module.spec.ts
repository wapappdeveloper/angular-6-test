import { LazyGridModuleModule } from './lazy-grid-module.module';

describe('LazyGridModuleModule', () => {
  let lazyGridModuleModule: LazyGridModuleModule;

  beforeEach(() => {
    lazyGridModuleModule = new LazyGridModuleModule();
  });

  it('should create an instance', () => {
    expect(lazyGridModuleModule).toBeTruthy();
  });
});
