Showcase
--------
A jQuery plugin to showcase your work with corresponding technologies and tools used for each item.


Demo
----   
For a quick demo you can visit [this page](http://zoltantoth.com/code/showcase/).


Usage
-----
Showcase depends on [jQuery](http://jquery.com). Include them both in your page:

```sh
<script src="correct/path/to/jquery.min.js"></script>
<script src="correct/path/to/jquery.showcase.min.js"></script>
```

Initialize the plugin:

```sh
$(function() {
    $(".tags").showcase({ 'delay' : 3000 });
});
```


Options
-------

* **delay** *(default: 2000)* - delay between the transitions in milliseconds.

* **itemClass** *(default: `.items`)* - CSS class of the container for the project tiles.

* **tagClass** *(default: `.tags`)* - CSS class of the container for the list of tools or technologies.

* **hoverClass** *(default: `.ahover`)* - CSS class for the highlighted tools or technologies.


Version
-------
1.0


License
-------
MIT