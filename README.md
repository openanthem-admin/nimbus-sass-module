# NIMBUS-SASS-MODULE
Anthem Approved CSS Styling

# Build Overview:

* Any new branch matching a valid version, will
1. Get a build plan created under nimbus-sass-modules in Bamboo.
2. Will increment patch version
3. Publish to npmjs.org as @next
4. Tag repository with new version.


* Merges into master branch
All merges into the master branch will have: 
1. Minor version incremented.
2. Published as @latest to npm.js/nimbuss-sass-module
3. Packed npm artifact will also be included in Bamboo build. 
