Showcase-jquery-plugin
----------------------
A jQuery plugin to showcase your work with corresponding technologies and tools used for each item.


Demo
----   
For a quick demo you can visit [this page](http://zoltantoth.com/code/showcase/).


Usage
-----
Showcase depends on [jQuery](http://jquery.com). Include them both in your page:

```sh
<script src="correct/path/jquery.min.js"></script>
<script src="correct/path/jquery.showcase.min.js"></script>
```

Initialize the plugin:

```sh
$(function() {
    $(".tags").showcase({ 'delay' : 3000 });
});
```


Available configuration options
-------------------------------

* `delay` - the delay in *ms* between the rotation ( default - `2000` )

* `tagClass` - the CSS class of the container for the list of tools or technologies ( default - `.tags` )

* `itemClass` - the CSS class of the container for the project tiles ( default - `.items` )

* `hoverClass` - the CSS class for the highlighted tools or technologies ( default - `.ahover` )


Version
-------
1.0


License
-------
MIT