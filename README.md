# Module: Holla
The `holla` module is based on the default `helloworld` modules of the MagicMirror. It is a simple way to display a static text on the mirror with the possibility to add css classes.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:

````javascript
modules: [
	{
		module: "holla",
		position: "bottom_bar",
		config: {			
			text: "Hey m8 !",
			class: "medium light dimmed"
		}
	}
]
````

## Configuration options

The following properties can be configured:

| Option  | Defaults
| ------- | -----------
| `text`  | holla
| `class` | small
