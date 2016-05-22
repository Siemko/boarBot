<?php
        $postdata = file_get_contents("php://input");
        $request = json_decode($postdata);
        switch ($request->id) {
                case 1:
                        $myFile = 'presentations/prez-' . $request->prezId . '.json';
                        $fs = fopen($myFile, 'w') or die("Can't open file");
                        $json = json_encode($request->data, JSON_PRETTY_PRINT);
                        fwrite($fs, $json);
                        fclose($fs);
                        break;
                default: 
                        return;
        }
?>