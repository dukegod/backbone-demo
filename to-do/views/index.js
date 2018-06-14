
var indexView = Backbone.View.extend({
  el: 'body',
  initialize() {
    this.render();
  },
  render() {
    var self = this;

    loadTemplate('header', function (e) {
      // console.log(e)
      // console.log(self.$el);
      self.$el.appendTo(e);
    })

    loadTemplate('container', function (e) {
      // console.log(e)
      // console.log(self.$el);
      self.$el.appendTo(e);
    })

    // console.log(this.$el);
    loadTemplate('footer', function (e) {
      // console.log(e)
      // console.log(self.$el);
      self.$el.appendTo(e);
    });

  }
});

new indexView();

