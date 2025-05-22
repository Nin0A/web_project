<?php

declare(strict_types=1);

use project\app\actions\HomeAction;

return function (\Slim\App $app): \Slim\App {

    // Home
    $app->get('/', HomeAction::class);

    return $app;
};
