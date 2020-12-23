# Loading Pane Algorithm

### Version

Document created for Coniestica v2.0.0.

### Content

The loading pane view is a component shown at the beginning of the index.html when loading the
website. It has a minimum duration (800ms) and a maximum duration (3000ms). If the window loads
after the minimum duration and before the maximum duration it also dismisses the loading view.

The algorithm is defined so that it shows the animation at least for the minimum amount of time, so
the animation is always displayed even when the page loads really quick but on the other hand if the
window takes too long to load, then it allows the user to see the content that was already loaded by
dismissing the animation and avoiding the user to leave because the loading process seemed really
tough!.

The loading pane view is managed at the [LoadingPane.mjs
](https://github.com/TobiasBriones/example.programming.web.coniestica/tree/v2.0.0/src/js/ui/loading-pane/LoadingPaneManager.mjs)
class.

[![Loading Pane Algorithm](https://raw.githubusercontent.com/TobiasBriones/images/main/example-projects/example.programming.web.coniestica/docs/loading-pane/loading-pane-animation-algorithm.svg)](https://github.com/TobiasBriones/images/tree/main/example-projects)
<p style="text-align: center;"><strong>Loading Pane Animation Algorithm</strong></p>
