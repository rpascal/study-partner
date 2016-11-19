import { StudyPartnerPage } from './app.po';

describe('study-partner App', function() {
  let page: StudyPartnerPage;

  beforeEach(() => {
    page = new StudyPartnerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
