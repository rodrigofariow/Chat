<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="css/app.css" rel="stylesheet">
    </head>
    <body>
        <div id="root">
            <h1>Chatroom</h1>
            <chat-message></chat-message>
            <chat-log></chat-log>
            <chat-composer></chat-composer>
        </div>
    </body>
    <script src="js/app.js"></script>
</html>