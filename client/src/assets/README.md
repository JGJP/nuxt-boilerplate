# Werks UI

## About

This repository is a base for all Werks UI related work.

Includes the following files:
- `base.sss`
- `transitions.sss`
- `vars.sss`

For any specific project UI related items, create a `proprietary.sss` file

## How To Use

### Installation
1. Go to the root directory of your project and type the following command:
```
git remote add werks-ui --fetch https://git.werks.co.jp/_werks/ui.git
```
* `git remote add <alias name> --fetch <git clone link>`

**Note: Before running the next command, be sure to do the following**
- You must not have any new changes on the working branch. Either commit the changes or stash them away before running the next command.
- The folder you're going to be adding using `git subtree` must not exist already.

2. Next write in the `git subtree` command
```
git subtree add --prefix /(location-of-assets-or-styles-folder) werks-ui master --squash
```

### Pulling Changes
If you need to pull the latest changes from the subtree, then type the following command
```
git fetch werks-ui master
git subtree pull --prefix /(location-of-assets-or-styles-folder) werks-ui master --squash
```

You can find more information at [git-tree.txt](https://github.com/git/git/blob/master/contrib/subtree/git-subtree.txt)