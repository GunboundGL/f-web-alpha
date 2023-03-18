module.exports = function(grunt) {


    grunt.registerTask('default', [], function() {
        var pkg = grunt.file.readJSON('package.json');
        var version = pkg.version;
        var versionParts = version.split('.');
        var major = versionParts[0];
        var minor = versionParts[1];
        var patch = versionParts[2];
        var newVersion = major + '.' + minor + '.' + (parseInt(patch) + 1);
        pkg.version = newVersion;
        grunt.file.write('package.json', JSON.stringify(pkg, null, 2));
    });
}