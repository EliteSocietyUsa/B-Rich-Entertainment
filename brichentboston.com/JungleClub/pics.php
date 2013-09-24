<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Jungle Club Music Group - Pictures</title>
        <link rel="stylesheet" type="text/css" href="reset.css"/>
        <link rel="stylesheet" type="text/css" href="style.css"/>
    </head>
    <body>
    	<header id="headerImg">
    		<a href="index.html"><img src="img/jungleclub-graphic.png" /></a>
    	</header>
            <a href="music.html" ><h1 class="headers">Music</h1></a>
            <a href="videos.html" ><h1 class="headers">Videos</h1></a>
            <a href="pics.php" ><h1 class="headers current">Pictures</h1></a>
            <a href-"jungleclub.tumblr.com" ><h1 class="headers">Blog</h1></a>
        <div id="container">
            <?php
                // don't forget to change 'username' to your actual tumblr name
                $request = 'http://jungleclub.tumblr.com/api/read/json';
                $ci = curl_init($request);
                curl_setopt($ci, CURLOPT_RETURNTRANSFER, TRUE);
                $input = curl_exec($ci);
                // Tumblr JSON doesn't come in standard form, some str replace needed
                $input = str_replace('var tumblr_api_read = ','',$input);
                $input = str_replace(';','',$input);
                // parameter 'true' is necessary for output as PHP array
                $value = json_decode($input, true);
                $content =  $value['posts'];
                // the number of items you want to display
                $item = 100;
                // Tumblr provides various photo size, this case will choose the 75x75 square one
                $type = 'photo-url-500';

                for ($i=0;$i<=$item;$i++) {
                    if ($content[$i]['type'] == 'photo') {
                        echo '<a href="' . $content[$i]['url'] . '"><img class="photos" src="' . $content[$i][$type] . '" width="300" hspace="3" alt="' . $content[$i]['photo-caption'] . '" title="' . $content[$i]['photo-caption'] . '" /></a>';
                     }
                }
            ?>
        </div>
        <footer><h6>Jungle Club Music Group 2013</h6></footer>
    </body>
</html>