<?php

namespace project\app\actions;

use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;

class HomeAction extends AbstractAction
{
    public function __invoke(ServerRequestInterface $rq, ResponseInterface $rs, array $args): ResponseInterface
    {
        $data = ['data' => 'Hello World'];
        $rs->getBody()->write(json_encode($data));
        return $rs->withHeader('Content-Type', 'application/json');
    }
}
