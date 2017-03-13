import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    web3.eth.getBalance("0x6DcFA49E1c61758AFd02789c6d2bacdfC4c9cEd9", function (error,result) {
      instance.counter.set(result);
    });
  },
});
