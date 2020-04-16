const { shell } = require('electron');

webopen = url => {
    shell.openExternal(url);
}