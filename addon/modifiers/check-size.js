import { Modifier } from 'ember-oo-modifiers';

const checkSize = Modifier.extend({
    width: null,
    height: null,

    onWidthChanged: null,
    onHeightChanged: null,
    timerId: null,

    didReceiveArguments(params, namedParams) {
        // this.set('onEnterViewport', namedParams.onEnterViewport);
        // this.set('onExitViewport', namedParams.onExitViewport);

        let enabled = !!namedParams.enabled;

        if(!enabled && this.get('timerId')){
            this.cancelCheck();
        }

        if(enabled && !this.get('timerId')){
            this.scheduleCheck();
        }
    },

    willDestroyElement(){
        this._super(...arguments);
        this.cancelCheck();
    },

    cancelCheck(){
        cancelAnimationFrame(this.get('timerId'));
        this.set('timerId', null);
        this.set('width', null);
        this.set('height', null);
    },

    scheduleCheck(){
        let timerId = requestAnimationFrame(()=>{
            let boxSizing = (getComputedStyle ? getComputedStyle(this.element).getPropertyValue('box-sizing') : 'content-box');
            let height = this.element.clientHeight - (boxSizing==='content-box' ? parseInt(this.element.style.paddingTop) + parseInt(this.element.style.paddingBottom) : 0);
            let width = this.element.clientWidth - (boxSizing==='content-box' ? parseInt(this.element.style.paddingLeft) + parseInt(this.element.style.paddingRight) : 0);

            if(height!==this.get('height')){
                this.set('height', height);
                if(this.get('onHeightChanged')){
                    this.get('onHeightChanged')(height);
                }
            }

            if(width!==this.get('width')){
                this.set('width', width);
                if(this.get('onWidthChanged')){
                    this.get('onWidthChanged')(width);
                }
            }

            this.scheduleCheck();
        });

        this.set('timerId', timerId);
    },
});

export default Modifier.modifier(checkSize);
