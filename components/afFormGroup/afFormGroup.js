Template.afFormGroup_materialize.skipInputType = [
    'checkbox',
    'checkbox-group',
    'boolean-checkbox',
    'select-radio',
    'select-checkbox-inline',
    'select-radio-inline',
    'boolean-radios',
    'toggle',
    'switch'
];
Template.afFormGroup_materialize.skipLabelTypes = [
    'checkbox',
    'checkbox-group',
    'boolean-checkbox',
    'select-radio',
    'select-checkbox-inline',
    'select-radio-inline',
    'boolean-radio',
    'toggle',
    'switch'
];
Template.afFormGroup_materialize.helpers({
    addInputField: function () {
        var result, skipInputType, type;
        skipInputType = Template.afFormGroup_materialize.skipInputType;
        type = AutoForm.getInputType(this);
        result = !_.contains(skipInputType, type);
        return result;
    },
    skipLabel: function () {
        var result, skipLabelTypes, type;
        skipLabelTypes = Template.afFormGroup_materialize.skipLabelTypes;
        type = AutoForm.getInputType(this);
        result = this.skipLabel || _.contains(skipLabelTypes, type);
        return result;
    }
});

Template.afFormGroup_materialize.skipActiveLabelTypes = [
    'select',
    'checkbox',
    'checkbox-group',
    'boolean-checkbox',
    'select-radio',
    'select-checkbox-inline',
    'select-radio-inline',
    'boolean-radio',
    'toggle',
    'switch'
];
Template.afFormGroup_materialize.rendered = function () {
    var formId;
    formId = AutoForm.getFormId();
    this.autorun((function (_this) {
        return function () {
            var value = AutoForm.getFieldValue(_this.data.name, formId);
            var inputValue = AutoForm.getInputValue(_this.find('input'));
            var type = AutoForm.getInputType(_this.data);
            var placeholder = _this.data.afFieldInputAtts.placeholder;
            var skipActiveLabelTypes = Template.afFormGroup_materialize.skipActiveLabelTypes;

            if (!_.contains(skipActiveLabelTypes, type)) {
                if (!!value || !!inputValue || !!placeholder) {
                    return _this.$('.input-field > label:not(:focus)').addClass('active');
                } else {
                    return _this.$('.input-field > label:not(:focus)').removeClass('active');
                }
            }
        };
    })(this));
};
