ember-check-size
==============================================================================

[Short description of the addon.]


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-check-size
```


Usage
------------------------------------------------------------------------------

&lt;div {{check-size 
        enabled=enabled
        onHeightChanged=(action (mut height))
        onWidthChanged=(action (mut width))
        }} style='background-color:brown; height:200px; margin:10px; padding:5px; {{if enabled "" (concat "width:" width "px;")}}'&gt;
&lt;/div&gt;


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.

* `git clone <repository-url>`
* `cd ember-check-size`
* `npm install`

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
