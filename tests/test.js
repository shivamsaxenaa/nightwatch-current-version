module.exports = {
  tags: ['PostGig'],
  'Post a Gig as Existing Business user': function (browser) {
    browser
        .navigateTo('https://staging2.instawork.com')
        .waitForElementVisible('body > nav > div > ul.navbar-nav.font-weight-semibold.ml-0 > li.nav-item.mx-24 > a')
        .click('body > nav > div > ul.navbar-nav.font-weight-semibold.ml-0 > li.nav-item.mx-24 > a')
        .setValue('#id_email', ['Autobusiness12345@mailinator.com'])
        .click("#id_password")
        .setValue('#id_password', ['123456789'])
        .click("body > div.container > div > div > div > div > form > div.d-flex.flex-column.align-items-center.mt-16 > input")
        .pause(2000)
        .click("body > div.container.mt-20 > div > div > div.d-flex.flex-column.flex-md-row.justify-content-between.mb-16 > div > a")
        .pause(2000)
        .click("#booking-flow-spa-container > div > div > div.col-md-7.mr-md-0.md-offset-1.col-sm-12.mx-sm-auto.pt-24.d-flex.justify-content-end > div > form > div.mb-16.form-group > select")
        .setValue("#booking-flow-spa-container > div > div > div.col-md-7.mr-md-0.md-offset-1.col-sm-12.mx-sm-auto.pt-24.d-flex.justify-content-end > div > form > div.mb-16.form-group > select", "Automation Cafe and Restaurant")
        .pause(2000)
        .click("#booking-flow-spa-container > div > div > div.col-md-7.mr-md-0.md-offset-1.col-sm-12.mx-sm-auto.pt-24.d-flex.justify-content-end > div > form > div.d-flex.flex-row-reverse.justify-content-between.align-items-center.mt-24 > button")
        .waitForElementVisible('#booking-flow-spa-container > div > div > div.col-md-7.mr-md-0.md-offset-1.col-sm-12.mx-sm-auto.pt-24.d-flex.justify-content-end > div > form > div.card.mb-16.p-16.gutter-none.gutter-sm-normal > div:nth-child(2) > select')
        .click("#booking-flow-spa-container > div > div > div.col-md-7.mr-md-0.md-offset-1.col-sm-12.mx-sm-auto.pt-24.d-flex.justify-content-end > div > form > div.card.mb-16.p-16.gutter-none.gutter-sm-normal > div:nth-child(2) > select")
        .setValue("#booking-flow-spa-container > div > div > div.col-md-7.mr-md-0.md-offset-1.col-sm-12.mx-sm-auto.pt-24.d-flex.justify-content-end > div > form > div.card.mb-16.p-16.gutter-none.gutter-sm-normal > div:nth-child(2) > select", "30")
        .click("#booking-flow-spa-container > div > div > div.col-md-7.mr-md-0.md-offset-1.col-sm-12.mx-sm-auto.pt-24.d-flex.justify-content-end > div > form > div.card.mb-16.p-16.gutter-none.gutter-sm-normal > div.position-shift.mb-24.mb-md-16 > div > div.col-6.col-md-4.order-0.col > div > input")
        .click("body > div.fade.datepicker-module__container___BwBZuDAYGYHym_mgLySW.show > div > div > div.react-calendar__navigation > button.react-calendar__navigation__arrow.react-calendar__navigation__next-button")
        .pause(2000)
        .click("body > div.fade.datepicker-module__container___BwBZuDAYGYHym_mgLySW.show > div > div > div.react-calendar__viewContainer > div > div > div > div.react-calendar__month-view__days > button:nth-child(14) > abbr")
        .pause(2000)
        .click("#booking-flow-spa-container > div > div > div.col-md-7.mr-md-0.md-offset-1.col-sm-12.mx-sm-auto.pt-24.d-flex.justify-content-end > div > form > div.d-flex.flex-row-reverse.justify-content-between.align-items-center.mt-24 > button.btn.btn-lg.btn-primary.btn.btn-primary")
        .pause(2000)
        .click("#booking-flow-spa-container > div > div > div.col-md-7.mr-md-0.md-offset-1.col-sm-12.mx-sm-auto.pt-24.d-flex.justify-content-end > div > div.d-flex.flex-row-reverse.justify-content-between.align-items-center.mt-24 > button.btn.btn-lg.btn-primary.btn.btn-primary")
        .pause(2000)
        .click("#booking-flow-spa-container > div > div > div.col-md-7.mr-md-0.md-offset-1.col-sm-12.mx-sm-auto.pt-24.d-flex.justify-content-end > div > form > div.d-flex.flex-row-reverse.justify-content-between.align-items-center.mt-24 > button.btn.btn-lg.btn-primary.btn-indicator.px-32.btn.btn-primary")
        .pause(2000)
        .click("#gigs-view-navbar > li.iwn-nav-item.active > a")
        .click("#gigList > div:nth-child(74) > div > a > div.d-flex.flex-row.justify-content-between.border-bottom")
        .click("#iwAccountButton > svg")
        .click("#iwNavToggler > ul:nth-child(2) > li.iwn-nav-item.dropdown.iwn-desktop-account > div > div > a:nth-child(6)")
        .end();
  },
};
