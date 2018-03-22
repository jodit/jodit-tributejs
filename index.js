/*!
 * Jodit Tribute JS plugin (https://xdsoft.net/jodit/)
 * License MIT
 * Copyright 2013-2018 Valeriy Chupurnov https://xdsoft.net
 */
Jodit.defaultOptions.tributejs = {
    values: [
        {key: 'Phil Heartman', value: 'pheartman'},
        {key: 'Gordon Ramsey', value: 'gramsey'}
    ]
};
/**
 * Jodit Tribute JS plugin
 * @param {Jodit} editor
 */
Jodit.plugins.tributejs = function (editor) {
    var tribute;
    editor.events
        .on('beforeEnter', function (event) {
            if (tribute.isActive) {
                return true;
            }
        })
        .on('afterInit', function () {
            tribute = new Tribute(editor.options.tributejs);
            tribute.attach(editor.editor);
        });
};