# Beatal
A beautiful alternative for 'alert' JS, using Bootstrap's Modal

## How it works?
With a simple call, **Beatal** (a JS plugin) displays an elegant (and **customizable**) alert (or... a Modal Bootstrap). 
It is great for alerts, errors and success.
For example, see a **Success Beatal** ![Success Beatal example](https://github.com/rcrdrobson/beatal/raw/master/docs/imgs/successExample.png).

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
> \<script src=" https://rawgit.com/rcrdrobson/beatal/master/dist/beatal.min.js "></script>

Or, you can download the 'dist/' folder and use:
> \<script src=" dist/beatal.min.js ">\</script>
or
> \<script src=" dist/beatal.js ">\</script>

### Dependencies
You must have in your project the **Bootstrap**, **Jquery** and **Font-Awesome".

You can put this between HEAD tag:
> \<script src=" https://use.fontawesome.com/57bb343fdc.js ">\</script>

> \<script src=" https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js ">\</script>

> \<link rel="stylesheet" href=" https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css " integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

> \<script src=" https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js " integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

## Contribute and license
**Beatal** was created by **Ricardo Robson**, you can follow him on [Twitter](https://twitter.com/rcrdrobson) or [Facebook](https://www.facebook.com/rcrdrobson) for updates and other projects!

**Beatal** use [ISC Lincense](https://en.wikipedia.org/wiki/ISC_license). Feel free to fork **Beatal** on GitHub if you have any features that you want to add!

You can contact me by email too: rcrdrobson@gmail.com
