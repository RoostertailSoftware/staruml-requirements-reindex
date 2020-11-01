# StarUML Extension to Reindex Requirements id field

This extension will walk thru any level selected Requirment and update the id filed.

## Installation

Open Extension Manager *(tools > Extension Manger)* and select *Registry* Tab and enter "merge" in search box. You can find this extion and click **install** button.

## Usage

To update all the children of a Requirment's tree select the first Requirement Element then select **Tools > Reindex Requirements id** or press the Cmd-i or Ctrl-i shortcut keys.

The requirments will be reindex with the indexing scheme of:
````
1 <--- start Requirements Reindexing on this node
    1.1
        1.1.1
        1.1.2
            1.1.1.1
            1.1.1.2
                1.1.1.2.1
    1.2
        1.2.1
            1.2.1.1
            1.2.1.2
        1.2.2
    1.3
    .
    .
    .
```
## Preferences
Currently, there are two preferences which are ignored.


---
Licensed under the MIT license (See LICENSE file)