//Famous Components
//const GestureHandler    = Famous.components.GestureHandler;
const Curves            = Famous.transitions.Curves;
const DOMElement        = Famous.domRenderables.DOMElement;
const Node              = Famous.core.Node;
const Opacity           = Famous.components.Opacity;
const Position          = Famous.components.Position;
const Scale             = Famous.components.Scale;

/*
 *
 */
class App extends Node {
    constructor() {
        super();

        this
            .setSizeMode('absolute', 'absolute')
            .setAbsoluteSize(500, 500)
            .setAlign(.5, .5)
            .setMountPoint(.5, .5)
            .setOrigin(.5, .5);

        this.domEL = new DOMElement(this, {
            classes: ['my-class'],
            'properties': {
                'border': '1px solid #333333'
            }
        });
    }
}

const scene = Famous.core.FamousEngine.createScene('#app');
window.app  = scene.addChild(new App());