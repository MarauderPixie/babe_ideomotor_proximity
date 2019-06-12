# babe_ideomotor_proximity

simon task examining the effect of spatial proximity of stimuli on speed and accuracy

...using the [_babe framework](https://babe-project.github.io/babe_site/)

## using the experiment

In order to use this, please follow [these instructions](https://github.com/babe-project/departure-point) and make changes accordingly. 

After point 5 (`npm install`), you can either:

### Do the bare minimum

- in file `06_main.js` change line 34 from `deployMethod: "directLink",` to `deployMethod: "debug",`

This way you can download the results of the currently finished experimental run as `csv` file - you also **have to** if you want to keep the results.

### Put in a little effort

- install, setup and run a local _babe server app on your machine

This is quite a bit more elaborate but way _(way!)_ more convenient, since the app will consistently store experimental data (e.g. for several participants) which you can then download as a single, (mostly) analysis-ready file.

To set up your local app, go to [the babe-docs](https://babe-project.github.io/babe-docs/02_using_the_server_app/01_installation/#installation-locally) and just follow the instructions. 

**You'll have to** also change a few more things than the `deployMethod` - the documentation will walk you through.