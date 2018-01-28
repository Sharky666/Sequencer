import { SequencePage } from './app.po';

describe('sequence App', () => {
  let page: SequencePage;

  beforeEach(() => {
    page = new SequencePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
