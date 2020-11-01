# StarUML Extension to Reindex Requirements id field

This extension will walk thru any level selected Requirment and update the id filed.

## Installation

Open Extension Manager *(tools > Extension Manger)* and select *Registry* Tab and enter "Requriements" in search box. You can find this extension and click **install** button.

## Usage

To update all the children of a Requirment's tree select the first Requirement Element then select **Tools > Reindex Requirements id** or press the Cmd-i or Ctrl-i shortcut keys.

The requirments will be reindex with the indexing scheme of:

```
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


## Todo:
### Different Indexing
* work on Reindexing using the following
* This would be selected in Preferences

```
1
    1.A
    1.B
        1.B.i
        1.B.ii
            1.B.ii.a
            1.B.ii.b
                1.B.ii.b.1
                1.B.ii.b.1
        1.B.iii
            1.B.iii.a
    .
    .
    .
```
### Requirement Prefix

* Work on getting a Prefix before the id index
* this is setup by the preference

```
REQ 1
    REQ 1.1
    REQ 1.2
        REQ 1.2.1
.
.
.
```

### Requirements Matrix
Create an output Requirements Matrix that will have the Requirement and some of the things it

Number | id | name | text | owner | Refines | Verified by | Satisifies
:-- | :-- | :-- | :-- | :-- | :-- | :-- | :--
1 | 1 | Performance | | | | |
2 | 1.4 | Speed | | 1 | | ||
3 | 1.4.1 | Must go fast | | 1.4 | ||


---
##### Licensed under the MIT license (See LICENSE file)