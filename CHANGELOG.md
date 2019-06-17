# v1.0.0-alpha
This is manual added changelog version for the code review.

---

## Features

* Modular MVVM architecture
* Storybook of components ([src/stories](src/stories))
* Responsivity of most styles (src/assets/styles)
* Material-UI animations (src/plugins/vuetify)
* Dynamic content (src/components, src/utils/base)
* General API (src/utils/config)
* Prep for localization (src/utils/constants)
* Vuex states control
* Documentation (src/stories, src/utils, src/store)
* Unit test exmaple (tests)

## Need Fix

* Tried to disable swipe of uncompleted tabs element by event with stopPropagation, preventDefault, but It would takes more time.
* Fixed left buttons with logos should be fixed only horizontally.
* Borders at list page
* Handle empty state of properties before mount data from services

## TODO

* Active schedule should be changed by position of canvas line instead of top scrollbar.
* E2E test for critical path of app.
* Other views with services conections.
* Lazyload for details of show.

## Recommendation for services

* Layzloading for each date
* Layzloading for every 20-30 programs in day
