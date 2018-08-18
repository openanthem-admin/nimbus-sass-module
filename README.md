# NIMBUS-SASS-MODULE
Anthem Approved CSS Styling


# Build Overview:

Any branch mathing feature/ will invoke a build plan in Bamboo: http://bamboo.oss.antheminc.com/browse/NIMBUS-NMSAS

The results of a feature/ build will be an attached artifact.  This is a packed npm module, and can be installed as such for testing.

* Merges into develop branch
All merges into the develop branch will have:
1. Patch version incremented.
2. Published as @next to npm.js/nimbus-sass-module
3. Packed npm artifact will also be included on Bamboo build

* Merges into master branch
All merges into the master branch will have: 
1. Minor version incremented.
2. Published as @latest to npm.js/nimbuss-sass-module
3. Packed npm artifact will also be included in Bamboo build. 
