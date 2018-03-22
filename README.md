# Jodit and TributeJS
* [Jodit editor](https://xdsoft.net/jodit/)
* [Tribute JS](https://github.com/zurb/tribute)

## Install
```bash
npm i jodit-tributejs
```

In page
```html
<!-- Jodit -->
<link rel="stylesheet" href="../node_modules/jodit/build/jodit.min.css">
<script src="../node_modules/jodit/build/jodit.min.js"></script>
<!-- TributeJS  -->
<link rel="stylesheet" href="../node_modules/tributejs/dist/tribute.css">
<script src="../node_modules/tributejs/dist/tribute.min.js"></script>
<!-- plugin -->
<script src="../index.js"></script>
```

And simple init Jodit
```html
<textarea id="editor" cols="30" rows="10"></textarea>
<script>
	var editor = new Jodit('#editor');
</script>
```

Enter @ char


