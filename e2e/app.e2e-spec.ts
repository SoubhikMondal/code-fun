import { CodeFunPage } from './app.po';

describe('code-fun App', () => {
  let page: CodeFunPage;

  beforeEach(() => {
    page = new CodeFunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
