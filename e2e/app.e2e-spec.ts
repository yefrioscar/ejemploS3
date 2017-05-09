import { MyFirsAppPage } from './app.po';

describe('my-firs-app App', () => {
  let page: MyFirsAppPage;

  beforeEach(() => {
    page = new MyFirsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
