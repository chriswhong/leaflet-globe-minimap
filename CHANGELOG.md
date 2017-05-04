# Change Log
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased
### Added
- `topojsonSrc` option to specify custom TopoJSON world-map data

### Changed
- Upgrade dependencies: d3, leaflet, topojson(-client), uglify-js
- Example page loads dependencies from `node_modules/` instead of making network requests
- Convert to ES6+ module
- Convert to ES6+ class
- Use Webpack for build process (instead of directly calling uglify-js)
- Example page loads plugin from `dist/` instead of `src/`

## 0.0.1 - 2015-10-10
### Added
- Forked from https://github.com/Norkart/Leaflet-MiniMap
