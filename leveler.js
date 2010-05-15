// Date.now
if(!Date.now) {
    Date.now = function() {return (new Date().getTime())};
}

// String.trim() (from Crockford)
if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(
            /^\s*(\S*(\s+\S+)*)\s*$/,
            '$1');
    }
}