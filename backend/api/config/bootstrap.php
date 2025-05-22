<?php

declare(strict_types=1);

use Slim\Factory\AppFactory;

$app = AppFactory::create();

(require_once __DIR__ . '/routes.php')($app);

return $app;
