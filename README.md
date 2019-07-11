# NIMBUS-SASS-MODULE
Core styling library for the [Nimbus Framework](https://github.com/openanthem/nimbus-core).

# About
The `nimbus-ui` module of the [Nimbus Framework](https://github.com/openanthem/nimbus-core) pulls the published content for `nimbus-sass-module` from the npm registry. This means when changes are pushed to the npm registry for a particular `nimbus-sass-module` version, the `nimbus-ui` artifact must be updated to point to that version in order to reflect the styling changes.

# Build Overview

**Any new branch matching a valid version, will**  
1. Get a build plan created under `nimbus-sass-modules` in [Bamboo](http://bamboo.oss.antheminc.com).
2. Will increment patch version
3. Publish to npmjs.org as @next
4. Tag repository with new version.

**Merges into master branch**  

All merges into the master branch will have: 

1. Minor version incremented.
2. Published as @latest to npm.js/nimbuss-sass-module
3. Packed npm artifact will also be included in [Bamboo](http://bamboo.oss.antheminc.com) build. 
 
# Development

## Workspace setup
1. Install an IDE (Recommended: [Visual Studio Code](https://code.visualstudio.com))
2. Install [NodeJS](https://nodejs.org)
3. Clone the `nimbus-sass-module` project
4. `cd` to the project directory and execute: `npm install`

## How to test changes locally
To test style changes locally, a developer should have the [Nimbus Framework](https://github.com/openanthem/nimbus-core) checked out and setup as well as an application to run that is using Nimbus. We'll assume you're using our sample application: [Petclinic](https://github.com/openanthem/petclinic-training).

1. `cd` to the `nimbus-sass-module` project directory and execute: `npm build`
2. Copy the contents from `/dist` into the `nimbus-core` directory at `/nimbus-ui/nimbusui/node_modules/nimbus-sass-module/dist`
3. Build `nimbus-ui`: `mvn clean install -DskipTests -P devbuild`
4. Build `petclinic-web`: `mvn clean install`
5. Run `petclinic-web` as a Spring Boot Application.

NOTE: You can also execute `npm start` from the `/nimbus-ui/nimbusui` directory to test changes on the fly via http://localhost:4200. See the [Nimbus Framework](https://github.com/openanthem/nimbus-core) README for more information.

## Issue Reporting
Are you stuck on an implementation or do you think you might have found an issue within the framework?    
Please create a post in the [OSS Discourse Forum](http://discourse.oss.antheminc.com/) so that we might take a look and validate the issue you're seeing. In the case that a framework change is needed, one of the project admins will create an associated issue in Github/[JIRA](https://anthemopensource.atlassian.net/secure/RapidBoard.jspa?projectKey=NIMBUS) to address the required change.

Licensing
=========
Anthem Open Source projects are licensed under the *Apache License v2* . See [LICENSE](https://github.com/openanthem/oss-base/blob/master/LICENSE) for the full license text.
