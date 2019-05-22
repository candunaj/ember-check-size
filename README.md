ember-check-size
==============================================================================

[Short description of the addon.]

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

### Installation

* `git clone <repository-url>`
* `cd ember-check-size`
* `npm install`

### Linting

* `npm run lint:hbs`
* `npm run lint:js`
* `npm run lint:js -- --fix`

### Running tests

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions

### Running the dummy application

* `ember serve`
* Visit the dummy application at [http://localhost:4200](http://localhost:4200).

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
