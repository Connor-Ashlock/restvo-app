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
    CreateFeaturePage,
    AboutPage,
    PreferencesPage
} from './app.po';
<<<<<<< HEAD
import { browser } from 'protractor';
=======
import { browser, element, by } from 'protractor';
import {disc} from "ionicons/icons";
>>>>>>> unfinished work in progress with e2e file

describe('navigate around the maintab', () => {
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

    beforeAll(async () => {
        // testing on mobile sized screen
        const width = 600;
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
<<<<<<< HEAD
        await showfeature.navigateTo(); // navigate to '/'
        await showfeature.waitUntilPresent(); // wait until showfeature is present
        await showfeature.clickSigninButton('#signin');
        await browser.waitForAngular(); // wait for angular to stabilize
        await register.fillEmail(); // fill email
        await register.fillPassword(); // fill password
        await register.submitLoginForm(); // submit form
        await maintab.waitUntilVisible(); // wait until maintab is visible
=======
        browser.waitForAngularEnabled(false); // prevent an unknown async function from blocking protractor
        await showfeature.navigateTo();
        await browser.sleep(500); // wait
        showfeature.clickSigninButton('#signin');
        await browser.sleep(10000); // wait
        await register.fillEmail();
        //await register.fillPhoneNumber();
        await register.fillPassword();
        await browser.sleep(1000); // wait
        register.submitLoginForm();
>>>>>>> unfinished work in progress with e2e file
    });

    it('should log in successfully', async () => {
        expect(await app.currentUrl()).toContain('app'); // it should contain /app in url
    });

<<<<<<< Updated upstream
    it('should load the news page', async () => {
<<<<<<< HEAD
        await maintab.clickTabButton('#tab-button-news'); // click on the News tab
        await news.waitUntilVisible(); // wait for news to be visible
        expect(await app.currentUrl()).toContain('app/news'); // it should contain /news in url
    });

    it('should load the Me page', async () => {
        await maintab.clickTabButton('#tab-button-me'); // click on the Me tab
        await me.waitUntilVisible(); // wait for me to be visible
        expect(await app.currentUrl()).toContain('app/me');
    });

    it('should load the edit profile page', async () => {
        await maintab.clickTabButton('#edit-profile-button'); // click on edit profile
        await about.waitUntilVisible(); // wait until about page is visible
        expect(app.headerIsPresent('#about-me-header')).toBeTruthy(); // the about me header is present
    });

});
=======
=======

    it('should locate the first discoverable program and go to its page', async () => {
        await browser.sleep(5000) //wait 5 seconds
        element(by.css('.program-card')).click()
        await browser.sleep(5000)
        expect(await app.currentUrl()).toContain('app/activity');
        })
    })

    it('should join the first discovered program' async () => {
        await browser.sleep(5000)
        element(by.css('icon-inner')).click()
        await browser.sleep(5000)
        element(by.css('tile-photo')).click()
        await browser.sleep(5000)
        element(by.css('button-inner')).click()
        await browser.sleep(5000)
        element(by.css('button-inner')).click()
        await browser.sleep(5000)
    })
    /*it('should load the news page', async () => {
>>>>>>> Stashed changes
        maintab.clickTabButton('#tab-button-news');
        await browser.sleep(2000); // wait
        expect(await app.currentUrl()).toContain('app/news');
    });



    it('should load the chat page', async () => {
        maintab.clickTabButton('#tab-button-myconversations');
        await browser.sleep(2000); // wait
        expect(await app.currentUrl()).toContain('app/myconversations');
    });

    // it('should load the Me page', async () => {
    //     maintab.clickTabButton('#tab-button-me');
    //     await browser.sleep(2000); // wait 2 sec
    //     expect(await app.currentUrl()).toContain('app/me');
    // });

    // it('should open about page', async () => {
    //     await me.clickPersonProfileCard();
    //     await browser.sleep(1000); // wait 1 sec
    //     expect(about.headerIsPresent('#about-me-header')).toBeTruthy();
    // });

    // it('should go back to Me page', async () => {
    //     await about.clickBack();
    //     await browser.sleep(1000); // wait 1 sec
    //     expect(await app.currentUrl()).toContain('app/me');
    // });

    // it('should open main menu', async () => {
    //     me.clickMenuToggle('#menuToggle');
    //     await browser.sleep(1000); // wait 1 sec
    //     expect(app.headerIsPresent('#main-menu-toolbar')).toBeTruthy();
    // });

    /*it('should open settings', async () => {
        app.clickSettings('#settings');
        await browser.sleep(1000); // wait 1 sec
        expect(app.headerIsPresent('#main-menu-toolbar')).toBeTruthy();
    });*/

  /* it('should open preference page', async () => {
        await about.clickEditAll();
        await browser.sleep(1000); // wait 1 sec
        expect(preferences.headerIsPresent('#editall')).toBeTruthy();
    });

    it('should go back to about page', async () => {
        await preferences.clickBack();
        await browser.sleep(1000); // wait 1 sec
        expect(about.headerIsPresent('#about-me-header')).toBeTruthy();
    });


   /*it('should open create mentoring popup', async () => {
        await dashboard.clickCreate();
        await browser.sleep(3000); // wait
        expect(pickfeature.headerIsPresent('#pickfeature-header')).toBeTruthy();
    });

    /*it('should list more than one new program', async () => {
        pickfeature.chooseCategory('#program');
        await browser.sleep(500); // wait
        pickfeature.clickNextButton();
        await browser.sleep(200); // wait
        expect(pickfeature.countNumberOfNewPrograms()).toBeGreaterThan(0);
    });

    it('should list more than one new personal plan', async () => {
        pickfeature.clickBackButton();
        await browser.sleep(100); // wait
        pickfeature.chooseCategory('#personal');
        await browser.sleep(500); // wait
        pickfeature.clickNextButton();
        await browser.sleep(200); // wait
        expect(pickfeature.countNumberOfNewPrograms()).toBeGreaterThan(0);
    });

    it('should open clone community view', async () => {
        pickfeature.clickBackButton();
        await browser.sleep(100); // wait
        pickfeature.chooseCategory('#community');
        await browser.sleep(500); // wait
        pickfeature.clickNextButton();
        await browser.sleep(200); // wait
        pickfeature.clickCreateNewMoment();
        await browser.sleep(1000); // wait
        expect(createfeature.headerIsPresent('#createfeature-header')).toBeTruthy();
        await browser.sleep(5000); // wait
    });*/



    /*it('should click create event button', async () => {
        dashboard.clickCreateEvent();
        await browser.sleep(1000); //wait for modal to come up
        expect(dashboard.editEventModalPresent()).toBeTruthy();
    });*/

    /*it('should create an event', async () => {
        await dashboard.createEvent();
        await browser.sleep(5000); //wait for modal to go down
        expect(dashboard.getEventText()).toContain('Protractor Test Event');
        browser.waitForAngularEnabled(false); //prevent an unknown async function from blocking protractor
    })*/

    // it('should click the created event', async () => {
    //     await dashboard.clickNewEvent();
    //     await browser.sleep(5000); //wait for modal to come up
    //     expect(dashboard.showEventModalPresent()).toBeTruthy();
    //     browser.waitForAngularEnabled(false); //prevent an unknown async function from blocking protractor
    // })

    // it('should delete the event', async () => {
    //     await dashboard.deleteEvent();
    //     await browser.sleep(5000); //wait for modal to go down
    //     expect(dashboard.getEventText()).not.toContain('Protractor Test Event');
    //     browser.waitForAngularEnabled(false); //prevent an unknown async function from blocking protractor
    // })

    /*it('should click create meetup', async () => {
        await dashboard.clickMoreOptions();
        await browser.sleep(5000); //wait for menu to drop
        await dashboard.clickCreateMeetup();
        await browser.sleep(5000); //wait for modal to come up
        expect(dashboard.editMeetupModalPresent()).toBeTruthy();
        browser.waitForAngularEnabled(false); //prevent an unknown async function from blocking protractor
    })

    it('should create a meetup', async () => {
        await dashboard.createMeetup();
        await browser.sleep(5000); //wait for modal to go down
        expect(dashboard.getEventText()).toContain('Protractor Test Meetup');
        browser.waitForAngularEnabled(true); //prevent an unknown async function from blocking protractor
    })*/

/*    it('should open the more options page', async () => {
        //await maintab.navigateTo();
        await dashboard.clickMoreOptions();
        expect(await maintab.currentUrl()).toContain('app/dashboard');
    });*/
// });
>>>>>>> unfinished work in progress with e2e file
