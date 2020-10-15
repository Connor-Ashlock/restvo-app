import {
  AppPage,
  MaintabPage,
  RegisterPage,
  NewsPage,
  ChatPage,
  DiscoverPage,
  DashboardPage,
  ShowfeaturePage,
  PickfeaturePopoverPage,
  PickpeoplePopoverPage,
  OnboardingfeaturePage,
  CreateFeaturePage,
  AboutPage,
  PreferencesPage
} from '../app.po';
import { browser, by } from 'protractor';
import { AotCompiler } from '@angular/compiler';

describe(' Add and Remove a Restvo User as friend', () => {
  let app: AppPage;
  let showfeature: ShowfeaturePage;
  let maintab: MaintabPage;
  let register: RegisterPage;
  let news: NewsPage;
  let chat: ChatPage;
  let discover: DiscoverPage;
  let about: AboutPage;
  let preferences: PreferencesPage;
  let me: DashboardPage;
  let pickfeature: PickfeaturePopoverPage;
  let pickpeople: PickpeoplePopoverPage;
  let createfeature: CreateFeaturePage;
  let onboardfeature: OnboardingfeaturePage;

  beforeAll(async () => {
    // testing on desktop sized screen
    const width = 1200;
    const height = 968;
    await browser.driver.manage().window().setSize(width, height);
    app = new AppPage();
    maintab = new MaintabPage();
    register = new RegisterPage();
    showfeature = new ShowfeaturePage();
    news = new NewsPage();
    chat = new ChatPage();
    discover = new DiscoverPage();
    me = new DashboardPage();
    about = new AboutPage();
    preferences = new PreferencesPage();
    pickfeature = new PickfeaturePopoverPage();
    pickpeople = new PickpeoplePopoverPage();
    createfeature = new CreateFeaturePage();
    onboardfeature = new OnboardingfeaturePage();
    await browser.get('/');
  });

  it('should show unauthenticated main page', async () => {
    await showfeature.waitUntilElementPresent('#showfeature-header');
    expect(await showfeature.headerIsPresent('#showfeature-header')).toBeTruthy();
  });

  it('should login as Ted Ho', async () => {
    await showfeature.waitUntilElementVisible('#signin');
    await showfeature.clickElement('#signin');
    await register.waitUntilVisible();
    await register.fillEmail();
    await register.fillPassword();
    await register.submitLoginForm();
    await register.waitUntilInvisible();
    expect(await maintab.waitUntilPresent()).toBeTruthy();
  });

  it('should click the Chat tab', async () => {
    await app.clickElement('#chat');
    await app.waitUntilUrlContains('myconversations');
    await chat.waitUntilVisible();
    expect(await app.currentUrl()).toContain('myconversations');
  });

  it('should show the Create Chat page', async () => {
    await app.clickElement('#createNewChatButton');
    await app.waitUntilElementVisible('#createChatHeader');
    expect(await app.elementIsPresent('#createChatHeader')).toBeTruthy();
  });

  it('should select Asia Ho and show confirmation alert', async () => {
    await app.enterSearchbarInputText('#chatSearchBar', 'Asia Ho');
    await browser.sleep(5000); //change to ensure intended user shows up on list
    // await app.waitUntilElementPresent('#restvoGroup .restvoGroup')
    // await app.waitUntilElementTextPresent('#restvoGroup', 'Asia Ho')
    // await browser.sleep(5000);
    await app.clickElement('#restvoGroup ion-item');
    await app.clickElement('#selectAppUsersButton')
    await app.waitUntilElementVisible('ion-alert');
    // await app.selectSubElement('#restvoGroup')
    expect(await app.elementIsPresent('ion-alert')).toBeTruthy();//expect button to be truthy
    // expect(await browser.wait(ExpectedConditions.textToBePresentInElement(el, text))  elementIsPresent('#createChatHeader')).toBeTruthy();//expect button to be truthy
  });


  //await app.clickAlertButton('yes');
  //

  //add spec to ch

});
