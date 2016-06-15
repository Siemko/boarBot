<?php
    /*
     ChatterBotAPI
     Copyright (C) 2011 pierredavidbelanger@gmail.com
     
     This program is free software: you can redistribute it and/or modify
     it under the terms of the GNU Lesser General Public License as published by
     the Free Software Foundation, either version 3 of the License, or
     (at your option) any later version.
     
     This program is distributed in the hope that it will be useful,
     but WITHOUT ANY WARRANTY; without even the implied warranty of
     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     GNU Lesser General Public License for more details.
     
     You should have received a copy of the GNU Lesser General Public License
     along with this program.  If not, see <http://www.gnu.org/licenses/>.
    */
    
    require 'chatterbotapi.php';
    
    $factory = new ChatterBotFactory();
    $bot = $factory->create(ChatterBotType::CLEVERBOT);
    $botsession = $bot->createSession();
    
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $response = new stdClass();
    $response->message = $botsession->think($request->ask);
    echo json_encode($response); 
?>