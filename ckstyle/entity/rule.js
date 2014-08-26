var helper = require('./entityutil');
var Cleaner = helper.Cleaner;
var ALL = helper.ALL;

function Rule(selector, name, value, ruleSet) {
    var self = this;

    self.roughName = name
    self.roughValue = value
    self.roughSelector = selector

    self.name = Cleaner.clearName(name)
    self.value = Cleaner.clearValue(value)
    self.selector = Cleaner.clearSelector(selector)

    self.strippedName = name.trim()
    self.strippedValue = value.trim()
    self.strippedSelector = selector.trim()

    self.fixedName = ''
    self.fixedValue = ''

    self.ruleSet = ruleSet

    self.browser = ALL
    self.toBeUsed = {}
}

Rule.prototype.rebase = function() {
    var self = this;
    self.fixedName = ''
    self.fixedValue = ''
}
    
Rule.prototype.reset = function(name, value) {
    var self = this;
    self.roughName = self.name = self.strippedName = self.fixedName = name
    self.roughValue = self.value = self.strippedValue = self.fixedValue = value
}

Rule.prototype.compress = function(browser) {
    var self = this;
    browser = browser || ALL;
    if (self.browser && !(self.browser & browser)) {
        return ''
    }
    name = self.fixedName ? (self.fixedName + '').trim() : self.name
    value = self.fixedValue ? (self.fixedValue + '').trim() : self.value
    return name + ':' + Cleaner.clean(value) + ';'
}

Rule.prototype.fixed = function() {
    var self = this;
    var name = (self.fixedName || self.strippedName) + ''
    var value = (self.fixedValue || self.strippedValue) + ''
    return name + ': ' + Cleaner.clean(value) + ';'
}

Rule.prototype.getRuleSet = function() {
    var self = this;
    return self.ruleSet
}

Rule.prototype.toString = function() {
    var self = this;
    return ' roughName: ' + self.roughName + '\n name: ' + self.name + '\n roughValue: ' + self.roughValue + '\n value: ' + self.value + '\n';
}

module.exports = Rule;