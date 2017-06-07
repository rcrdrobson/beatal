# Beatal
A beautiful alternative for 'alert' JS, using Bootstrap's Modal

## How it works?
With a simple call, **Beatal** (a JS plugin) displays an elegant (and **customizable**) alert (or... a Modal Bootstrap). 
It is great for alerts, errors and success.
For example, [see a **Success Beatal**](https://github.com/rcrdrobson/beatal/tree/master/docs/imgs/successExample.png).

To call **Beatal**, you can use: **beatal(typeBeatal,titleBeatal,textBeatal,textBtnClose,actionBtnText,actionBtnFunction);**

When:

**typeBeatal**: Is a string. Can be "warning", "error" or "success", **only**.

**titleBeatal**: Is a string. Is a title message of **Beatal**.

**textBeatal**: Is a string. Is the body message **Beatal**.

**textBtnClose** (optional): Is a string. Is the text of button to close **Beatal**. Default: "close".

**actionBtnText** (optional): Is a string. Is the text of button to run a function. Default: not exist. Only show the Close Button.

**actionBtnFunction** (optional): Is a JS function. Is thefunction wich run whan the ActionButton has clicked.

## Get started
You can import this **Beatal**'s script:
> https://github.com/rcrdrobson/beatal/tree/master/dist/beatal.min.js

To do this, **put this** in your HTML page:
> <script src=" https://rawgit.com/rcrdrobson/beatal/master/dist/beatal.min.js "></script>

Or, you can download the 'dist/' folder and use:
> <script src=" dist/beatal.min.js"></script>
or
> <script src=" dist/beatal.js"></script>

## Contribute and license
**Beatal** was created by **Ricardo Robson**, you can follow him on [Twitter](https://twitter.com/rcrdrobson) or [Facebook](https://www.facebook.com/rcrdrobson) for updates and other projects!

**Beatal** use [ISC Lincense](https://en.wikipedia.org/wiki/ISC_license). Feel free to fork **Beatal** on GitHub if you have any features that you want to add!

You can contact me by email too: rcrdrobson@gmail.com
