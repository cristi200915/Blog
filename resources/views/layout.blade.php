<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>LaravelAppNg</title>
    <base href="<?=url('/')?>/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" href="assets/js/<?=$style?>">
</head>
<body>
    <app-root></app-root>
    @foreach($scripts as $script)
    <script src="assets/js/<?=$script?>" type="module"></script>
    @endforeach
</body>
</html>
