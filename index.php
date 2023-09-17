<?php

/*
 * Escape key JS package for Bear Framework
 * https://github.com/ivopetkov/escape-key-js-bearframework-addon
 * Copyright (c) Ivo Petkov
 * Free to use under the MIT license.
 */

use \BearFramework\App;

$app = App::get();
$context = $app->contexts->get(__DIR__);

$app->clientPackages
    ->add('escapeKey', function (IvoPetkov\BearFrameworkAddons\ClientPackage $package) use ($context) {
        $package->addJSCode(include $context->dir . '/assets/escapeKey.min.js.php');
        //$package->addJSCode(file_get_contents($context->dir . '/dev/escapeKey.js'));
        $package->get = 'return ivoPetkov.bearFrameworkAddons.escapeKey';
    });
