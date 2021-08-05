<?php

require_once __DIR__ . '/../vendor/autoload.php';

define('DS',DIRECTORY_SEPARATOR);
define('ROOT',dirname(dirname(__FILE__)));
define('API_URI', str_replace('index.php','',$_SERVER['SCRIPT_NAME']));
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: *");


use app\lib\api;
use app\controllers\mainController;

$api = new api();
$api->post('/login', [mainController::class, 'login']);
$api->get('/properties', [mainController::class, 'properties']);
$api->post('/property', [mainController::class, 'property']);
$api->notFound_404();
