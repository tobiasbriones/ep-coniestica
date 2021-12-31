# Loading Pane Algorithm

### Version

Document created for Coniestica v2.2.0.

### Content

The loading pane view is a component shown at the beginning of the index.html when loading the
website. It has a minimum duration (800ms) and a maximum duration (3000ms). If the window loads
after the minimum duration and before the maximum duration it also dismisses the loading view.

The algorithm is defined so that it shows the animation at least for the minimum amount of time, so
the animation is always displayed even when the page loads really quick but on the other hand if the
window takes too long to load, then it allows the user to see the content that was already loaded by
dismissing the animation and avoiding the user to leave because the loading process seemed really
tough!.

The loading pane view is managed at the [loading-pane.mjs](../src/js/ui/loading-pane.mjs) module.

**Loading Pane Animation Algorithm:**
![Loading Pane Algorithm](https://raw.githubusercontent.com/tobiasbriones/ep-coniestica/static/loading-pane-animation-algorithm.svg)
