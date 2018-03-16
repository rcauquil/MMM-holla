Module.register("MMM-holla", {
	// Default module config.
	defaults: {
    text: 'holla',
		class: 'small'
	},

	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
    wrapper.className = this.config.class || this.defaults.class;
    wrapper.innerHTML = this.config.text || this.defaults.text;

		return wrapper;
	}
});
