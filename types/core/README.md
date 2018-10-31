# Core Api

This module describes the api exposed when a plugin or extension depends on the core anthill module

## Description

The core api allows a plugin or extension to access the core data of the server which includes

- bots: Configured bots
- settings: The basic configuration of the server
- plugins: Installed plugins (no access to API)

additional this data can be modified using the

- updateData(update)

function.

_This API is heavily in development, it's not recommended to use it yet_
