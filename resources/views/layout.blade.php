<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Blog Laravel App</title>
    <base href="<?=url('/')?>/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
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
