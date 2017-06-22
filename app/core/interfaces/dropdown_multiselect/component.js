define(['./interface', 'core/UIComponent', 'core/t', 'utils'], function (Input, UIComponent, __t, Utils) {
  return UIComponent.extend({
    id: 'dropdown_multiselect',
    dataTypes: ['VARCHAR'],
    variables: [
      {id: 'options', default_value: '', ui: 'json', options: {rows: 25, placeholder_text: '{\n    "value1": "Option One",\n    "value2": "Option Two",\n    "value3": "Option Three"\n}'}, comment: __t('select_options_comment'), required: true},
      {id: 'placeholder', default_value: '', ui: 'text_input'},
      {id: 'read_only', default_value: false, ui: 'toggle'},
      {id: 'use_native_input', ui: 'toggle', default_value: false, comment: 'Render the dropdown as a native HTML <section> element instead of our custom solution'}
    ],
    Input: Input,
    validate: function (value, options) {
      if (options.schema.isRequired() && Utils.isEmpty(value)) {
        return __t('this_field_is_required');
      }
    },
    list: function (options) {
      return options.value;
    }
  });
});