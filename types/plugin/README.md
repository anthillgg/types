# Plugin Api

This module describes the plugin api exposed to every plugin written for Anthill

## Description

The plugin api allows a plugin to access the api of all requested dependencies and to register new message triggers. A message trigger is a combination of a trigger word (command) and a corresponding action. The action is executed when a discord message includes on of the registered triggers.

### Data

- dependencies: Access to the requested APIs

### Functions

- registerMessageTrigger(triggers: string | string[], callback: MessageCommandCallback): boolean

_This API is heavily in development, it's not recommended to use it yet_
