<?php

namespace app\controllers;

use app\lib\apiResponse;
use app\lib\request;
use app\models\user;
use Laravie\Parser\Xml\Reader;
use Laravie\Parser\Xml\Document;

class mainController
{
    public $response;
    private $request;
    private $user;
    public function __construct()
    {
        $this->response = array();
        $this->request = new request();
        $this->user = new user();
    }
    
    public function login()
    {
        $body = $this->request->body();
        $response = new APIResponse();
        if(!isset($body["email"]))
            $body = json_decode(file_get_contents("php://input"), true);//temporary solution bcause of cors problem
        if (
            isset($body["email"])
            && isset($body["password"])
        ){
            $user = $this->user->get(["email" => $body["email"]]);
            if(!$user)
                $response->sendResponse(400, false, "Please check your information and try again");
            else if(!password_verify($body["password"], $user[0]['password']))
                $response->sendResponse(400, false, "Please check your information and try again");
            else
                $response->sendResponse(200, true, "Successful login", $user);
        }else
            $response->sendResponse(400, false, "Please send email and password");
    }

    public function properties()
    {
        $xml = (new Reader(new Document()))->load('https://prod.rockhome.hu/gendocs/ingatlanok.xml');
        $estates = $xml->parse([
            'estates' => ['uses' => 'estate[external_id>id,settlement,user_name>referent,price,size,images{image{src}}>images]']
        ]);
        $response = new APIResponse();
        $response->sendResponse(200, true, "All properties", $estates['estates']);
    }

    public function property()
    {
        $body = $this->request->body();
        $response = new APIResponse();
        if(!isset($body["propertyId"]))
            $body = json_decode(file_get_contents("php://input"), true);//temporary solution bcause of cors problem
        if (isset($body["propertyId"])){
            $xml = (new Reader(new Document()))->load('https://prod.rockhome.hu/gendocs/ingatlanok.xml');
            $estates = $xml->parse([
                'estates' => ['uses' => 'estate[external_id>id,settlement,street,price,size,plot,state>status,heating,siting>location,utilities,user_name>referent,user_email,user_phone,description,images{image{src}}>images]']
            ]);
            $key = array_search($body["propertyId"], array_column($estates['estates'], 'id'));
            if($key != null)
                $response->sendResponse(200, true, "estate exist",  $estates['estates'][$key]);
            else
                $response->sendResponse(400, true, "No estate");
        }else
            $response->sendResponse(400, false, "Please send propertyId");
    }
}